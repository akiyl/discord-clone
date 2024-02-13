import { Profile, Member, Server } from "@prisma/client";

export type ServerWithMembersWithProfile = Server & {
  members: (Member & { profile: Profile })[];
};
