
function FormButtonOne() {
    return (
        <div className="form-group row">
            <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Добавить</button>
                <button type="submit" className="btn btn-primary">Удалить</button>
            </div>
        </div>
    )
}




function FormButtonRedaction() {
    return (
        <div className="form-group row">
            <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">Редактировать</button>
            </div>
        </div>
    )
}



class Form extends React.Component {
    state = {
        name: 'Бумеранг не запущен',
        profession: '' ,
        date:'',
        gender: '',
        fired: false,

    }

    render() {

        return (
            <form>
                <div className="form-group">
                    <label htmlFor="example-text-input" className="col-xs-2 col-form-label">ФИО</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="text" value="" id="example-text-input" placeholder="Фамилия Имя Отчество"/>

                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="disabledSelect">Должность</label>
                    <select id="disabledSelect" className="form-control">
                        <option>HR</option>
                        <option>Технический писатель</option>
                        <option>Frontend-разработчик</option>
                        <option>Дизайнер</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="example-date-input" className="col-xs-2 col-form-label">Дата рождения</label>
                    <div className="col-xs-10">
                        <input className="form-control" type="date" value="1990-08-19" id="example-date-input"/>
                    </div>
                </div>

                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="female" id="exampleRadios1" value="жен"/>

                        жен
                    </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input className="form-check-input" type="radio" name="male" id="exampleRadios1" value="муж"/>

                        муж
                    </label>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Уволен
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group row">
                    <div className="col-sm-10">
                        <button onClick={() => { this.props.updateData(this.state.name)}} type="submit" className="btn btn-primary">Добавить</button>
                        <button type="submit" className="btn btn-primary">Удалить</button>
                    </div>
                </div>

                {/*<FormButtonOne/>*/}
            </form>
        )
    }
}



// карточка работника
class WorkerCard extends React.Component {
    state = {
        name: '',
        profession: '' ,
        date:'',
        gender: '',
        fired: false,

    }

    render() {
        return (

            <div className="container-fluid-lg-12 container-fluid-md-12 mt-3">
                <label className="form-check-label container-fluid">
                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
                           value="option1" checked/>

                        <div className="col bg-white mt-1">Имя</div>
                        <div className="col bg-white mt-1">Специальность</div>
                        <div className="col bg-white mt-1">Дата</div>
                        <div className="col bg-white mt-1">Пол</div>
                        <div className="col bg-white mt-1">Уволен</div>
                </label>
            </div>
        )
    }
}



// контейнер с формой редактирования
function RedactionContainerSection() {
    return (
        <div className="col-6 bg-info border border-dark ">
            <Form/>
        </div>
    )
}


//контейнер для заполненной формы
function WorkContainerSection(props) {
    return (
        <div className="col bg-info overflow-auto workers"/>
    )
}


//контейнер двух главных элементов
function WorkersAndRedactionContainer(props) {
    return (
        <div className="container-fluid d-flex flex-column flex-grow-1">
          <div className="row flex-grow-1">
              <WorkContainerSection/>
              <RedactionContainerSection/>
          </div>
        </div>
    )
}

class Worker extends React.Component {

    state = {
        name: '',
        profession: '' ,
        date:'',
        gender: '',
        fired: false,
    }

    updateData = () => {

        console.log('click!')
    }


    render() {

        return (
            <div className="col-9 mx-auto border border-dark d-table flex-column vh-100 main">
                <p>State: {this.state.name}</p>
                <Form updateData={this.updateData}/>
                <WorkersAndRedactionContainer/>
            </div>

            )
    }
}

ReactDOM.render(
    <Worker />,
    document.getElementById('root')
);

