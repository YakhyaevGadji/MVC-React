function Filter({setFilterProduct, setFilterStatus}) {
    return (
        <section>	    			
		    <div className="row mb-3 justify-content-start">
		    			
		    	<div className="col">
		    		<div id="topStatusBar" className="btn-group" role="group" aria-label="...">
		    			<button onClick={(e) => {setFilterStatus(e.target.dataset.value)}} className="btn btn-light" data-value="all">Все</button>
		    			<button onClick={(e) => {setFilterStatus(e.target.dataset.value)}} className="btn btn-light" data-value="new">Новые</button>
		    			<button onClick={(e) => {setFilterStatus(e.target.dataset.value)}} className="btn btn-light" data-value="work">В работе</button>
		    			<button onClick={(e) => {setFilterStatus(e.target.dataset.value)}} className="btn btn-light" data-value="complete">Завершенные</button>
		    		</div>
		    	</div>
		    	
		    	<div className="col">
		    		<select onChange={(e) => {setFilterProduct(e.target.value)}} className="custom-select" id="productSelect">
		    			<option value="all" defaultValue={'Все продукты'}>Все продукты</option>
		    			<option value="course-html">Курс по верстке</option>
		    			<option value="course-js">Курс по JavaScript</option>
		    			<option value="course-vue">Курс по VUE JS</option>
		    			<option value="course-php">Курс по PHP</option>
		    			<option value="course-wordpress">Курс по WordPress</option>
		    		</select>
		    	</div>
		    				
		    </div>
		</section>
    );
}

export default Filter;