export interface Workspace {
    type: string;
    id: string;
    name: string;
    organization: string;
    tags: string;
    description: string;
    publishedOn: string;
    modifiedOn: string;
    users: number;
    domains: number;
    dataSources: number;
    pendingApprovals: number,
  }
  