const AdminScreen = (props: {
  colorBgContainer: string;
  borderRadiusLG: number;
}) => {
  return (
    <div
      className="h-full"
      style={{
        padding: 24,
        minHeight: 360,
        background: props.colorBgContainer,
        borderRadius: props.borderRadiusLG,
      }}
    >
      content
    </div>
  );
};

export default AdminScreen;
