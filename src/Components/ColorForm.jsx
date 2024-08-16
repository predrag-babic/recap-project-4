export default function ColorForm({
  onSubmitColor,
  startData = {
    role: "some color",
    hex: "#000000",
    contrastText: "#ffffff",
  },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={startData.role}
        />
      </label>
    </form>
  );
}
