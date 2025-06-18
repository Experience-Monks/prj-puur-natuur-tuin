// Use file to configure the Renovate pipeline, the renovate.json file is used
// to enable renovate for this repository.

/**
 * 1. Create a repository access token for Renovate in BitBucket:
 *    https://bitbucket.org/<organisation>/<repository>/admin/access-tokens
 *
 *    Scopes:
 *      - pull-requests:write
 *
 *    Note: The pull-requests:write scope will enable scopes that it depends on.
 *    Note: The token is only shown once, so make sure to copy it because it's needed in the next step.
 *
 * 2. Create a personal access token for the GitHub API to fetch changelogs:
 *    https://github.com/settings/tokens?type=beta
 *
 *    Create a new token that expires in a year, the default token configuration should be fine (read-only public repositories).
 *
 * 3. Define environment variables in the pipeline repository variables configuration:
 *    https://bitbucket.org/<organisation>/<repository>/admin/addon/admin/pipelines/repository-variables
 *
 *    - BITBUCKET_ACCESS_TOKEN > App password for Bitbucket account
 *    - GITHUB_COM_TOKEN > GitHub token to fetch changelog (optional, highly recommended)
 */

module.exports = {
  /**
   * Pipeline configuration
   */
  platform: "bitbucket",
  token: process.env.BITBUCKET_ACCESS_TOKEN,
  repositories: [`${process.env.BITBUCKET_REPO_FULL_NAME}`],
  baseDir: `${process.env.BITBUCKET_CLONE_DIR}/renovate`,
  gitAuthor: "Renovate Bot <renovatebot@mediamonks.com>",

  /**
   * Repository configuration
   */
  lockFileMaintenance: {
    enabled: true,
    automerge: true,
  },
  packageRules: [
    {
      groupName: "minor/patch dependencies",
      groupSlug: "minor/patch",
      matchPackagePatterns: ["*"],
      matchUpdateTypes: ["minor", "patch"],
      matchDatasources: ["npm"],
      minimumReleaseAge: "3 days",
    },
    {
      groupName: "next dependencies",
      groupSlug: "next",
      matchPackageNames: ["next"],
      matchPackagePrefixes: ["@next/"],
      matchDatasources: ["npm"],
      minimumReleaseAge: "3 days",
    },
    {
      groupName: "storybook dependencies",
      groupSlug: "storybook",
      matchPackageNames: ["storybook"],
      matchPackagePrefixes: ["@storybook/"],
      matchDatasources: ["npm"],
      minimumReleaseAge: "3 days",
    },
  ],
};
