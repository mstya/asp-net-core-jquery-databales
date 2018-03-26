// Write your JavaScript code.

$(function(){

    var usersTable = $("#usersTable").DataTable({
                dom: "Bfrtip",
                lengthMenu: [
                    [10, 25, 50, -1],
                    ["10 rows", "25 rows", "50 rows", "Show all"]
                ],
                serverSide: true,
                processing: true,
                filter: true,
                orderMulti: false,
                ordering: false,
                searching: true,
                buttons: [
                    "pageLength", {
                        extend: "excelHtml5",
                        title: "Customers",
                        text: '<span title="Export To Excel"> <img src=../../Content/images/icons/xls.png width=24 /></span>',
                        className: "eport-excel",
                        exportOptions: { columns: [0, 1, 2, 3, 4, 5, 6, 7] }
                    }
                ],
                ajax: {
                    url: Urls.getCustomers,
                    type: "GET",
                    datatype: "json",
                    headers: headers,
                    data: function (data) {
                        //data.premiumReceived = $("#premumDropDown").val();

                        //var needFilterByVerified = $("#isVerifiedFilter").prop("checked");
                        //if (needFilterByVerified) {
                        //    data.showNotVerified = needFilterByVerified;
                        //}
                    }
                },
                columns: [
                    { data: "name", "autoWidth": true },
                    { data: "surname", "autoWidth": true },
                    { data: "idNumber", "autoWidth": true },
                    { data: "cellNumber", "autoWidth": true },
                    { data: "emailAddress", "autoWidth": true },
                    { data: "physicalAddressColumn", "autoWidth": true },
                    { data: "premiumReceivedColumn", "autoWidth": true },
                    { data: "company", "autoWidth": true }
                ]
            });
    

})