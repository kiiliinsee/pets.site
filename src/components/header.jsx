import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from '../components/images/logo.jpg';

// Login Component
const Login = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState(''); // New state for search query
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const auth = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    if (!form.checkValidity()) {
      e.stopPropagation();
      form.classList.add('was-validated');
      return;
    }

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(user);

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://pets.сделай.site/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.data) {
          localStorage.setItem('token', result.data.token);
          setToken(result.data.token);

            localStorage.token = result.data.token;

          setErrorMessage('');
          document.getElementById('success').style.display = 'block';
          document.getElementById('error').style.display = 'none';
        } else {
          setErrorMessage('Неправилный адрес электронной почты или пароль');
          document.getElementById('error').style.display = 'block';
          document.getElementById('success').style.display = 'none';
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('Произошла ошибка, попробуйте снова');
        document.getElementById('error').style.display = 'block';
        document.getElementById('success').style.display = 'none';
      });
  };

  // Search function
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to search results page or perform search with the query
      navigate(`/search?query=${searchQuery}`);
    }
  };

  // Header Component
  const Header = () => {
    const isActive = (path) => window.location.pathname === path;

    return (
      <header style={{backgroundColor: '#f3d6f2'}}>
        <h1 className='text-dark'>Поиск объявлений о потерянных животных</h1>
        <nav className="navbar navbar-expand-lg " style={{backgroundColor: '#f3d6f2'}}>
          <div className="container-fluid" style={{backgroundColor: '#f3d6f2'}}>
            <Link to="/Index" className="navbar-brand">
              <img src={logo} className="w-25 rounded-3" alt="logo" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/Index" className={`nav-link ${isActive('/Index') ? 'disabled' : ''}`}>Главная</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Kabinet" className={`nav-link ${isActive('/Kabinet') ? 'disabled' : ''}`}>Личный кабинет</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Registr" className={`nav-link ${isActive('/Registr') ? 'disabled' : ''}`}>Регистрация</Link>
                </li>
                <li className="nav-item">
                  <Link to="/AnimalSearch" className={`nav-link ${isActive('/AnimalSearch') ? 'disabled' : ''}`}>Поиск по объявлениям</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Add" className={`nav-link ${isActive('/Add') ? 'disabled' : ''}`}>Добавить объявление</Link>
                </li>
              </ul>
              <Link to="/Registr" className="btn btn-primary m-2">Регистрация</Link>

              <button type="button" className="btn m-2 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal1" style={{ backgroundColor: '#0d6efd' }}>
                Вход
              </button>
            </div>
          </div>
        </nav>
        {/* Search form */}
   
        <form className="d-flex">
          <input className="form-control me-2" type="search" list="pets" placeholder="Поиск" aria-label="Search" />
          <button className="btn btn-primary" onclick>Поиск</button>
          <datalist id="pets">
            <option value="Кошка">
            </option><option value="Собака">
            </option><option value="Корова">
            </option><option value="Крокодил">
            </option><option value="Сова">
            </option></datalist>
        </form>
      </header>
    );
  };

  return (
    <>
      <Header />
      <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor: '#f3d6f2'}}>
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ color: 'black' }}>Вход</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body text-start">
              <form id="form" onSubmit={auth} noValidate>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label" style={{ color: 'black' }}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: 'black' }}>Пароль</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={user.password}
                    onChange={handleChange}
                    name="password"
                    required
                  />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1" style={{ color: 'black' }}>Запомнить меня</label>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
              </form>
              <p className='text-danger text-center' id='error' style={{ display: errorMessage ? 'block' : 'none' }}>{errorMessage}</p>
              <p className='text-success text-center' id='success' style={{ display: token ? 'block' : 'none' }}>
                Вы успешно зарегистрировались, ваш токен: {token}
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;