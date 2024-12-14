import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { MobileSidebar } from "./mobile-sidebar";
import { FormPopover } from "@/components/form/form-popover";

export const Navbar = () => {

  return (
    <div className="fixed top-0 w-full h-14 border-b shadow-sm px-40 bg-white flex items-center z-50">
      <MobileSidebar/>
      <div className="flex items-center gap-x-4">
        <div className="hidden md:flex">
          <Logo />
        </div>
        <FormPopover align="start" side="bottom" sideOffset={24}>
          <Button
            className="rounded-sm hidden md:block h-auto py-1.5 px-2"
            size={"sm"}
          >
            Create
          </Button>
        </FormPopover>
          <FormPopover align="start" side="bottom" sideOffset={24}>
          <Button className="rounded-sm block md:hidden" size={"sm"}>
            <Plus className="h-4 w-4" />
          </Button>
          </FormPopover>
      </div>
      <div className="ml-auto flex items-center gap-x-2">
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl={"/organization/:id"}
          afterSelectOrganizationUrl={"/organization/:id"}
          afterLeaveOrganizationUrl={"/select-org"}
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          appearance={{ elements: { avatarBox: { height: 30, width: 30 } } }}
        />
      </div>
    </div>
  );
};
