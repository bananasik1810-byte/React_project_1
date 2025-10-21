import React from 'react'

const TablesPage = () => {
  return (
    <div>
      <h2>Таблицы:</h2>
      <table className="table table-hover">
        <thead className="table-dark">
            <tr>
                <th>ФИО</th>
                <th>Email</th>
                <th>Статус</th>
            </tr>
        </thead>
        <tbody>
            <tr className="table-success">
                <th>Крылаткова Анастасия Константиновна</th>
                <th>nastya-banova@yandex.ru</th>
                <th><span className="badge bg-success">Пользователь активен</span></th>
            </tr>
            <tr className="table-warning">
                <th>Крылаткова Анастасия Константиновна</th>
                <th>nastya-banova@yandex.ru</th>
                <th><span className="badge bg-warning">Пользователь заблокирован</span></th>
            </tr>
            <tr className="table-danger">
                <th>Крылаткова Анастасия Константиновна</th>
                <th>nastya-banova@yandex.ru</th>
                <th><span className="badge bg-danger">Пользователь заблокирован</span></th>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TablesPage
