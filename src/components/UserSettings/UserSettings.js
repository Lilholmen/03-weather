import SettingsItem from "./SettingsItem";

const UserSettings = ({ settings, settingsToggle }) => {
  return (
    <form className="flex gap-8">
      <h3 className="text-xl font-bold text-stone-700">Additional Settings:</h3>
      {settings.map((setting) => (
        <SettingsItem
          key={setting.id}
          info={setting}
          toggle={settingsToggle}
        />
      ))}
    </form>
  );
};

export default UserSettings;
