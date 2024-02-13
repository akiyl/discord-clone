"use client";
import { useState, useEffect } from "react";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { MemberRole } from "@prisma/client";
import { EditServerModal } from "@/components/modals/edit-server-modal";
import { MembersModal } from "@/components/modals/members-modal";
import { Edit } from "lucide-react";
export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <>
      <CreateServerModal />
      <EditServerModal />
      <InviteModal />
      <CreateServerModal />
      <MembersModal />
    </>
  );
};
