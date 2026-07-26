# Pre-workshop setup

1. Install `jj`, using [these instructions](https://docs.jj-vcs.dev/latest/install-and-setup/).
   - This includes [setting up your name and email address](https://docs.jj-vcs.dev/latest/install-and-setup/#initial-configuration). Use the same creds as you have set up for Git
   - We highly recommend also that you set up [command-line completion](https://docs.jj-vcs.dev/latest/install-and-setup/#command-line-completion)
2. `git clone` this repo. Do this in such a way that you will be able to push to this remote during the workshop (i.e. use the SSH URL if required)
3. Send to Alistair your GitHub username so you can be added as a collaborator to the remote. This will allow you to push during the workshop
4. Initialise `jj` in this repository (don't forget to `cd`):
    ```shell
    jj git init --colocate
    ```
   
# Slides

If you'd like to refer to the slides during the workshop (or have a sneak peek beforehand), you can simply open `./slides/index.html` in a browser