// Write your JavaScript code.

$(function () {

    $("#usersTable").DataTable({
        dom: "Bfrtip",
        lengthMenu: [
            [10, 25, 50, -1],
            ["10 rows", "25 rows", "50 rows", "Show all"]
        ],
        serverSide: true,
        processing: true,
        filter: true,
        orderMulti: false,
        ordering: true,
        searching: true,
        buttons: [
            "pageLength", {
                extend: "excelHtml5",
                title: "Customers",
                text: '<span title="Export To Excel"> <img src=../../Content/images/icons/xls.png width=24 /></span>',
                className: "eport-excel",
                exportOptions: { columns: [0, 1, 2, 3, 4] }
            }
        ],
        ajax: {
            url: "/Home/GetUsers/",
            type: "GET",
            datatype: "json",
         //   headers: headers,
            data: function (data) {
                //data.premiumReceived = $("#premumDropDown").val();

                //var needFilterByVerified = $("#isVerifiedFilter").prop("checked");
                //if (needFilterByVerified) {
                //    data.showNotVerified = needFilterByVerified;
                //}
            }
        },
        columns: [
            { data: "id", "autoWidth": true },
            { data: "firstName", "autoWidth": true },
            { data: "lastName", "autoWidth": true },
            { data: "email", "autoWidth": true },
            { data: "age", "autoWidth": true }
        ]
    });


})