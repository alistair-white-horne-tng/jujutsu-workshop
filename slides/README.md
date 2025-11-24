# Starting the presentation

To start the slide-show:

- `npm install`, needs TNG VPN access
- `npm run dev`
- visit http://localhost:3030

Edit the [slides.md](./slides.md) to see the changes.

# Publishing the slides

This repository contains configuration to publish the slides on `introduction-to-rust.slides.tngtech.com` as documented [here](https://docs.slides.tngtech.com/guide/features/publish.html).

Publishing requires the AWS CLI with an `~/.aws/config` containing something along the lines of:
```
[sso-session tng]
sso_start_url = https://tng.awsapps.com/start
sso_region = eu-central-1
region = eu-central-1
output = json


[profile tng-slides]
sso_session = tng
sso_account_id = 212516483589
sso_role_name = RevealPublisherAccess
```

Once this is set up, you can run
```sh
aws sso login --sso-session tng
```
to log in, and then
```sh
AWS_PROFILE="tng-slides" npm run publish
```
to publish the slides.

# More information

* [Slidev website](https://sli.dev/)
* [Documentation for the TNG theme](https://docs.slides.tngtech.com/)
