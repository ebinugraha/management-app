import { OrganizationProfile } from "@clerk/nextjs";
import { shadesOfPurple } from '@clerk/themes';

const SettingsPage = () => {
    return ( 
        <div className="w-full">
            <OrganizationProfile
                appearance={{
                    baseTheme: shadesOfPurple,
                }}
            />
        </div>
     );
}
 
export default SettingsPage;