using ABCBankFrontendOriginal.Models;

namespace ABCBankFrontendOriginal.Servicios
{
    public interface IServicio_Api
    {
        Task<List<Contacto>> Lista();

        Task<Contacto> filtrar(string buscarNombre, string buscarDireccion);
        Task<Contacto> Obtener(int id);
        Task<bool> Guardar(Contacto objeto);
        Task<bool> Editar(Contacto objeto);
        Task<bool> Eliminar(int id);

    }
}
