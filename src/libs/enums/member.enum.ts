export enum MemberType {
  SUPERADMIN = "SUPERADMIN",
  RESTAURANT = "RESTAURANT",
  USER = "USER",
}

export enum MemberStatus {
  ACTIVE = "ACTIVE",
  BLOCK = "BLOCK",
  DELETE = "DELETED",
}

// New enum for Authentication providers
export enum AuthProvider {
  LOCAL = "LOCAL",
  GOOGLE = "GOOGLE",
}
