function handleFormItemChange(items, label, newValue) {
    const updatedForm = items.map(item => {
        if (item.name === label) {
            const updatedItem = {
                ...item,
                value: newValue
            }
            return updatedItem;
        }
        return item;
    })
    return updatedForm;
}

export default handleFormItemChange;
