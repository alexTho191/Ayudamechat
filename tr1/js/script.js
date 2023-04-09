$(document).ready(function(){
    ListaClientes(); 
    
    function ListaClientes() 
    {
        $.ajax({
            url : "action.php", 
            method:"POST", 
            data:{op:"Vista"}, 
            success:function(data)
            {
                $('#result').html(data); 
            }
        });
    }

    $('#modal_button').click(
        function(){
            $('#customerModal').modal('show'); 
            $('#idDni').val('');
            $('#idNom').val(''); 
            $('#idCorreo').val('');
            $('#idMen').val('');
            $('.modal-title').text("REGISTRARSE"); 
            $('#action').val('Registrar');
        }
    );
});