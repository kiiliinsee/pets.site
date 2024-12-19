import kot from '../components/images/kot.jpg'
import koza from '../components/images/koza.jpg'
import dog from '../components/images/dog.jpg'
function Animals() {
    return (
    <div>
  <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: 60, marginRight: 60}}>
    <div className="col">
      <div className="card h-100">
        <img src={kot} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Кошечка</h5>
          {/* Кнопка-триггер модального окна */}
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btnradio1" autoComplete="off" defaultChecked />
  <label className="btn btn-outline-primary" htmlFor="btnradio1">Подробнее</label>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Редактировать</label>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btnradio3">Удалить</label>
</div>
          {/* Модальное окно */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Кошечка</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                  ID: 14<br />
                  Вид животного: Кошка<br />
                  Описание: Потерялась кошка, пушистая, серая. Любит играть, ласковая.<br />
                  Номер чипа: ca-001-spb<br />
                  Район: Василиостровский<br />
                  Дата: 24-03-2020 <br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={koza} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Коза</h5>
          {/* Кнопка-триггер модального окна */}
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btnradio1" autoComplete="off" defaultChecked />
  <label className="btn btn-outline-primary" htmlFor="btnradio1">Подробнее</label>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Редактировать</label>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btnradio3">Удалить</label>
</div>
          {/* Модальное окно */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Коза</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                  ID: 18<br />
                  Вид животного: Коза<br />
                  Описание: Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.
                  Номер чипа: go-011-spb<br />
                  Район: Центральный<br />
                  Дата: 14-03-2022<br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={dog} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Собака</h5>
          {/* Кнопка-триггер модального окна */}
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="btnradio1" autoComplete="off" defaultChecked />
  <label className="btn btn-outline-primary" htmlFor="btnradio1">Подробнее</label>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Редактировать</label>
  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
  <label className="btn btn-outline-primary" htmlFor="btnradio3">Удалить</label>
</div>
          {/* Модальное окно */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel"> Собака</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                  ID: 42<br />
                  Вид животного: Собака<br />
                  Описание: Собака рыжая, была утеряна в красногвардейском райне районе<br />
                  Номер чипа: do-123-spb<br />
                  Район: Красногвардейский<br />
                  Дата: 22-07-2023<br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <a className="btn btn-primary" href="add.html" role="button" style={{marginLeft: 60}}>Добавить объявление</a>
</div>

      );
}

export default Animals;