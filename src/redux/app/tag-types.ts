export enum tagType {
  user = "user",
  service = "service",
  order = "order",
}

// export const tagTypesList = [tagType.user, tagType.service, tagType.order];

export const tagTypesList = Object.values(tagType);
