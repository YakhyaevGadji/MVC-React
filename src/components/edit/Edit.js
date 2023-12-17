import { Link, useParams, useNavigate } from "react-router-dom";
import useItemFetch from "../fetchPost/useItemFetch";
import { useEffect, useState } from "react";

function Edit({setUpdateFetch, updateFetch}) {
	
	const {id} = useParams();
	const {item, isLoading, error} = useItemFetch('http://localhost:8000/applications/' + id);
	const [update, setUpdate] = useState(false);
	const usenavigate = useNavigate();

	function formatDate() {
		const date = new Date();

		const dd = date.getDate();
		if (dd < 10) dd = '0' + dd;
	  
		const mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;
	  
		const yy = date.getFullYear();
		
		return dd + '.' + mm + '.' + yy;
	}
 
	const saveChange = (e) => {
		e.preventDefault();

		setUpdate(true);
		setUpdateFetch(!updateFetch);

		const data = {
			course: document.querySelector('#product').value, 
			name: document.querySelector('#name').value, 
			email: document.querySelector('#email').value, 
			phone: document.querySelector('#phone').value,
			status: document.querySelector('#status').value,
			id: item.id,
			date: formatDate()
		}

		fetch('http://localhost:8000/applications/' + id, {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(data)
		}).then(() => {
			setUpdate(false);
			usenavigate('/table')
		});

	};

    return (
		
		<div className="form-wrapper">
			
			<div className="container-fluid">
			
				<div className="row justify-content-between align-items-center">
					<div className="col">
						<div className="admin-heading-1">Работа с заявкой</div>
					</div>
					<div className="col text-right">
						<Link to="/table">Вернуться назад</Link>
					</div>
				</div>
			
				<div className="row">
					{isLoading && <h1>Loading...</h1>}
					{error && <h1>Error to fetch</h1>}
					
					<div className="col">
						<form id="form">
						{item && <div className="card mb-4">
								<div className="card-header">Данные о заявке</div>
								<div className="card-body">
									<div className="row mb-3">
										<div className="col-md-2">
											<strong>ID:</strong>
										</div>
										<div className="col">Заявка №<span id="number">{item.id}</span></div>
										<input name="id" type="hidden" id="id"/>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Дата создания:</strong>
										</div>
										<div className="col" id="date">{item.date} 13:52:13</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Продукт:</strong>
										</div>
										<div className="col">
											<select defaultValue={item.course} id="product" name="product" className="custom-select" >
												<option value="course-html">Курс по верстке</option>
												<option value="course-js">Курс по JavaScript</option>
												<option value="course-vue">Курс по VUE JS</option>
												<option value="course-php">Курс по PHP</option>
												<option value="course-wordpress">Курс по WordPress</option>
											</select>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Имя:</strong>
										</div>
										<div className="col">
											<input
												type="text"
												className="form-control"
												id="name"
												name="name"
												defaultValue={item.name}
											/>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Email:</strong>
										</div>
										<div className="col">
											<input
												type="text"
												className="form-control"
												id="email"
												name="email"
												defaultValue={item.email}
												/>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Телефон:</strong>
										</div>
										<div className="col">
											<input
												type="text"
												className="form-control"
												id="phone"
												name="phone"
												defaultValue={item.phone}
												/>
										</div>
									</div>

									<div className="row mb-3">
										<div className="col-md-2">
											<strong>Статус заявки:</strong>
										</div>
										<div className="col">
											<select defaultValue={item.status} className="custom-select" id="status" name="status">
												<option disabled>Выберите...</option>
												<option value="new">Новая</option>
												<option value="work">В работе</option>
												<option value="complete">Завершена</option>
											</select>
										</div>
									</div>
								</div>
							</div>
							}
							
						
							<div className="row justify-content-between">
								<div className="col text-right">
									{!update && <button onClick={(e) => {saveChange(e)}} type="submit" className="btn btn-primary">Сохранить изменения</button>}
									{update && <button disabled  onClick={(e) => {saveChange(e)}} type="submit" className="btn btn-primary">Сохранение...</button>}
								</div>
							</div>
						</form>
					</div>
					
				</div>
				
			</div>
		</div>
    );
}

export default Edit;