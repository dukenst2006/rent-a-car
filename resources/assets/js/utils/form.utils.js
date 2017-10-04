export default {
    addActionsTo(object, onEdit, onDelete) {
        return Object.assign(object, {
            actions: [
                {
                    click: () => onEdit(object),
                    classes: 'text-warning',
                    text: '<i class="fa fa-edit"></i>Edit'
                },
                {
                    click: () => onDelete(object),
                    classes: 'text-danger',
                    text: '<i class="fa fa-remove"></i>Remove'
                }
            ]
        });
    }
};