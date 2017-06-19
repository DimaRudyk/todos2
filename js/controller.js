DemoApp.controller('DemoController', function DemoController($scope) {
    $scope.dataGridOptions = {
        dataSource: data,
        columns: [
            {
                dataField: "ToDo",
                sortOrder: "asc"
            },
            {
                dataField: "Date",
                dataType: 'date',
                editorOptions: {
                    type: 'time'
                },
                format: "longTime"
            },
            {
                dataField: "Done",
                dataType: "boolean",
                editorOptions:{
                    disable: false,
                    //readOnly: false
                }
            }
            
        ],
        editing: {
            mode: 'row',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            texts: {
                deleteRow: 'Remove',
                saveRowChanges: 'OK',
                confirmDeleteTitle: 'Confirm Row Deletion'
            }
        }

    };
});

