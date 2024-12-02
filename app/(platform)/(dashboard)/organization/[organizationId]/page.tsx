import { OrganizationSwitcher } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

const OrganizationPage = async () => {

    const {userId, orgId} = await auth();

    return (  
        <div>
            this is organization page
        </div>
    );
}
 
export default OrganizationPage;