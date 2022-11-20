function layout(settings: {
  align: "left" | "center" | "right";
  padding: number;
}) {
  console.log("Performing layout:", settings);
}

const instanceLayout = {
  align: "left" as const,
  padding: 4,
};

layout(instanceLayout);
