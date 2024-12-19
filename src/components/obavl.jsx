function Obavl() {
    return ( 
        <div>
  <br /><br />
  <form className="ann" style={{marginLeft: 100, marginRight: 100}}>
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">@</span>
      <input type="text" className="form-control" placeholder="Имя пользователя" aria-label="Имя пользователя" aria-describedby="basic-addon1" />
    </div>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Имя животного" aria-label="Имя животного" aria-describedby="basic-addon2" />
      <span className="input-group-text" id="basic-addon2">@example.com</span>
    </div>
    <div className="mb-3">
      <label htmlFor="basic-url" className="form-label">Введите вашу почту</label>
      <div className="input-group">
        <span className="input-group-text" id="basic-addon3">ivanov@example.com</span>
        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
      </div>
    </div>
    <div className="input-group mb-3">
      <span className="input-group-text">Дата потери</span>
      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
      <span className="input-group-text">.24</span>
    </div>
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Город" aria-label="Имя пользователя" />
      <span className="input-group-text">Введите район</span>
      <input type="text" className="form-control" placeholder="Район" aria-label="Сервер" />
    </div>
    <div className="input-group">
      <span className="input-group-text">Напишите особые приметы вашего животного</span>
      <textarea className="form-control" aria-label="С текстовым полем" defaultValue={""} />
    </div>
    <br />
    <div className="mb-3">
      <label htmlFor="formFileSm" className="form-label">Добавить фото животного</label>
      <input className="form-control form-control-sm" id="formFileSm" type="file" />
    </div>
    <div>
      {/* Кнопка-триггер модального окна */}
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{margin: 30}}>
        Добавить объявление
      </button>
      {/* Модальное окно */}
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Объявление добавлено</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
            </div>
            <div className="modal-body">
              Спасибо за подачу объявления о потери вашего питомца!!! Мы обязательно его найдем.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
              <button type="button" className="btn btn-primary">Понял</button>
            </div>
          </div>
        </div>
      </div>
    </div></form></div>

     );
}

export default Obavl;