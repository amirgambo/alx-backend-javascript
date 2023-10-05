#!/usr/bin/env python3

"""
Module with type-annotated function 'safely_get_value'
"""


from typing import TypeVar, Dict, Optional

K = TypeVar('K')  # Type variable for keys
V = TypeVar('V')  # Type variable for values


def safely_get_value(dct: Dict[K, V], key: K,
                     default: Optional[V] = None) -> Optional[V]:
    """
    Function that safely gets a value from a dictionary.
    If the key exists, it returns the value; otherwise,
    it returns the default value (or None if not provided).
    """
    if key in dct:
        return dct[key]
    else:
        return default
