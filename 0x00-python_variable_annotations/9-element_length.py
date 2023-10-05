#!/usr/bin/env python3

"""
Module with type-annotated function 'element_length'
"""


from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """
    Function that takes a list of strings and returns a list of tuples.
    Each tuple contains a string from the input list and its length.
    """
    return [(i, len(i)) for i in lst]
