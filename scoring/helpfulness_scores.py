# Source: twitter/communitynotes (Apache 2.0)
# https://github.com/twitter/communitynotes/blob/main/scoring/src/scoring/helpfulness_scores.py
#
# RadMo notes:
# This file implements the contributor reputation system.
# author_helpfulness() tracks writing quality (CRH/CRNH ratio, mean note score)
# _rater_helpfulness() tracks rating quality (agree ratio with eventual outcomes)
# compute_general_helpfulness_scores() combines both and sets aboveHelpfulnessThreshold
#
# RadMo adaptation:
# The aboveHelpfulnessThreshold concept maps directly to RadMo's credibility score.
# Key differences:
# - RadMo tracks is/ought sequencing and source diversity, not just CRH/CRNH ratio
# - RadMo uses multi-dimensional factor space, not binary left/right
# - RadMo's threshold is continuous (the credibility score itself) not binary
# - Harassment penalty concept is preserved — rating bad-faith content as helpful
#   should reduce your credibility score

import logging
from typing import Optional

import numpy as np
import pandas as pd


logger = logging.getLogger("communitynotes.helpfulness_scores")
logger.setLevel(logging.INFO)


def author_helpfulness(
  scoredNotes: pd.DataFrame,
  noteInterceptKey: str,
  CRNHMultiplier: float = 5.0,
) -> pd.DataFrame:
  """Computes author helpfulness scores.

  CRNHMultiplier=5.0 means writing a NOT-helpful note is penalized
  5x more than writing a helpful note is rewarded.
  This asymmetry is intentional: bad-faith content is more costly
  than good-faith content is valuable. RadMo should preserve this asymmetry.
  """
  scoredNotes.loc[:, "noteCount"] = 1
  cols = [
    "currentlyRatedHelpful",
    "currentlyRatedNotHelpful",
    "noteCount",
    noteInterceptKey,
  ]
  authorCounts = (
    scoredNotes[["noteAuthorParticipantId"] + cols].groupby("noteAuthorParticipantId").sum()
  )
  authorCounts["crhRatio"] = authorCounts["currentlyRatedHelpful"] / authorCounts["noteCount"]
  authorCounts["crnhRatio"] = authorCounts["currentlyRatedNotHelpful"] / authorCounts["noteCount"]
  # The key metric: CRH rate minus (5x CRNH rate)
  # Positive = net helpful contributor; Negative = net harmful contributor
  authorCounts["crhCrnhRatioDifference"] = authorCounts["crhRatio"] - (
    authorCounts["crnhRatio"] * CRNHMultiplier
  )
  authorCounts["meanNoteScore"] = authorCounts[noteInterceptKey] / authorCounts["noteCount"]
  return authorCounts
