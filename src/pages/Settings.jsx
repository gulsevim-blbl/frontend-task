import React from "react";
import ProfileSection from "../components/ProfileSection";
import SettingsSection from "../components/SettingsSection";
import SupportSection from "../components/SupportSection";
import LogoutSection from "../components/LogoutSection";
import SubscriptionSection from "../components/SubscriptionSection";

const Settings = () => {
  return (
    <div className="flex-1">
      <header className="text-center text-md pt-3 text-lg">Ayarlar</header>
      <ProfileSection />
      <SubscriptionSection title="Abonelik" title2="Kayıtlı Kartlarım" />
      <SettingsSection title="Bildirimler" title2="Dil" />
      <SupportSection />
      <LogoutSection />
    </div>
  );
};

export default Settings;
