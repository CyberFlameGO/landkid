export type LandRequestOptions = {
  prId: number;
  prAuthorAaid: string;
  prTitle: string;
  triggererAaid: string;
  commit: string;
};

export type RepoConfig = {
  botUsername: string;
  botPassword: string;
  repoOwner: string;
  repoName: string;
  repoUuid: string;
};

export type PullRequestSettings = {
  requiredApprovals: number;
  requireClosedTasks: boolean;
  requireGreenBuild: boolean;
  canApproveOwnPullRequest: boolean;
  allowLandWhenAble: boolean;
};

export type ApprovalChecks = {
  isOpen: boolean;
  isApproved: boolean;
  isGreen: boolean;
  allTasksClosed: boolean;
};

export type DeploymentConfig = {
  secret: string;
  redis: {
    endpoint: string;
    port: number;
  };
  oAuth: OAuthConfig;
};

export type OAuthConfig = {
  key: string;
  secret: string;
};

export type Config = {
  port: number;
  baseUrl: string;
  landkidAdmins: string[];
  repoConfig: RepoConfig;
  prSettings: PullRequestSettings;
  deployment: DeploymentConfig;
};

export type RunnerState = {
  queue: Array<IStatusUpdate>;
  waitingToQueue: Array<IStatusUpdate>;
  pauseState: IPauseState;
  daysSinceLastFailure: number;
  usersAllowedToLand: Array<string>;
  bitbucketBaseUrl: string;
};