const SettingsItem = ({ info, toggle }) => {
  return (
    <div className="flex gap-2  border-b border-stone-200 hover:border-stone-700">
      <input
        type="checkbox"
        id={info.label}
        checked={info.active}
        onChange={() => {
          toggle(info.id);
        }}
      />
      <label
        className="text-lg font-bold first-letter:capitalize"
        htmlFor={info.label}
      >
        {info.label}
      </label>
    </div>
  );
};

export default SettingsItem;
