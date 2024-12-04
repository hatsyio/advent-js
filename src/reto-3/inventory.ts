type Inventory = Array<{ name: string; quantity: number; category: string }>;

export default function organizeInventory(inventory: Inventory): object {
  return inventory.reduce((acc, item) => {
    return {
      ...acc,
      [item.category]: {
        ...acc[item.category],
        [item.name]:
          acc[item.category]?.[item.name] + item.quantity || item.quantity,
      },
    };
  }, {});
}
