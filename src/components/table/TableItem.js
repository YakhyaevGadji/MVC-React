import { Link } from "react-router-dom";

function TableItem({data}) {

    const results = data.map((item) => {
		const courseSplice = item.course.split('-');

		const courseFormat = {
			php: 'Курс по PHP',
			html: 'Курс по версте',
			js: 'Курс по JavaScript',
			vue: 'Курс по VUE',
			wordpress: 'Курс по WordPress'
		}

		const statusFormat = {
			new: ['Новый', 'danger'],
			work: ['В работе', 'warning'],
			complete: ['Завершенный', 'success']
		}

		return (
			<tr key={item.id}>
				<th scope="row">{item.id}</th>
				<td>{item.date}</td>
				<td>{courseFormat[courseSplice[1]]}</td>
				<td>{item.name}</td>
				<td>{item.email}</td>
				<td>{item.phone}</td>
				<td>
					<div className={`badge badge-pill badge-${statusFormat[item.status][1]}`}>{statusFormat[item.status][0]}</div>
				</td>
				<td>
					<Link to={`/edit/${item.id}`}>Редактировать</Link>
				</td>
			</tr>
		)
	})

    return (
		<tbody id="tbody">
			{results}
		</tbody>
    );
}

export default TableItem;