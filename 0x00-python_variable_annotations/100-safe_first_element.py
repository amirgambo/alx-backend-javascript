#!/usr/bin/env python3

"""
Module with type-annotated function 'safe_first_element'
"""


from typing import Optional, Any


def safe_first_element(lst: List[Any]) -> Optional[Any]:
    """
    Function that safely returns the first element of a list.
    If the list is empty, it returns None.
    """
    if lst:
        return lst[0]
    else:
        return None
