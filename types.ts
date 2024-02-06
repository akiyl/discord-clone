import { Profile, Member, Server } from "@prisma/client";

export type ServerWithMembersWithProfile = Server & {
  Members: (Member & { profile: Profile })[];
};
