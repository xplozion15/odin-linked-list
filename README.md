# odin-linked-list



An implementation of a linked list in JavaScript as part of The Odin Project.

## Features

- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given `index`.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the passed-in `value` is in the list, otherwise returns `false`.
- `find(value)`: Returns the index of the node containing `value`, or `null` if not found.
- `toString()`: Represents the linked list as a string in the format:
  
  ```
  ( value ) -> ( value ) -> ( value ) -> null
  ```