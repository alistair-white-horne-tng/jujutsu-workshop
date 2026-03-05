# Pre-workshop setup

1. `git clone` this repo
2. Install `jj`, using [these instructions](https://docs.jj-vcs.dev/latest/install-and-setup/).
3. Initialise `jj` in this repository:
    ```shell
    jj git init --colocate
    ```
4. Track the following bookmarks (we'll explain the purpose of this during the workshop...). It is intentional that `exercise-four` is missing:
    ```shell
    jj bookmark track exercise-one exercise-two exercise-three exercise-five main
    ```