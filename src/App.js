
import React, { useState } from 'react';
import { data } from './data/data';
import { HeaderContainer, Container, Tags, TagsContainer } from './styledCompontes/globalStyled';
import CardJob from './components/CardJob';

const App = () => {  
  const [isFilter, SetFilter] = useState(false)
  const [labels, setLabels] = useState({
    role: '',
    level: '',
    languages: []
  })

  const addRole = (role) => {
    setLabels({
      ...labels,
      role: role
    })    
    SetFilter(true)
  }

  const addLevel = (level) => {
    setLabels({
      ...labels,
      level: level
    })    
    SetFilter(true)
  }

  const addLanguages = x => {
    if (labels.languages.length <= 0) {
      setLabels({
        ...labels,
        languages: labels.languages.concat(x)
      })
    } else {
      if (!labels.languages.includes(x)) {
        setLabels({
          ...labels,
          languages: labels.languages.concat(x)
        })
      }}
    SetFilter(true)
  }

  const deleteRole = () =>{
    setLabels({
      ...labels,
      role:''
    })
    SetFilter(false)
  }
  const deleteLevel = () =>{
    setLabels({
      ...labels,
      level:''
    })
    SetFilter(false)
  }

  const deleteLanguages = (language)=>{
    let newLanguages = labels.languages.filter((x=> x !== language))    
    if(newLanguages.length > 0 ){
      setLabels({
        ...labels,
        languages:newLanguages
      })    
    }else{      
      setLabels({
        ...labels,
        languages:[]
      })    
      SetFilter(false)
    }        
  }

  const deleteTags = () => {
    setLabels({
      role: '',
      level: '',
      languages: []
    })
    SetFilter(false)
  }
  return (
    <Container>
      <HeaderContainer />
      <TagsContainer isFilter={isFilter}>
        <Tags>
          {
            labels.role ? <div >
              <p>{labels.role}</p>
              <span onClick={()=>deleteRole(labels.role)}>X</span>
            </div> : null
          }
          {
            labels.level ? <div >
              <p>{labels.level}</p>
              <span onClick={()=> deleteLevel(labels.level)}>X</span>
            </div> : null
          }
          {
            labels.languages.map((x, i) => {
              return <div key={x}>
                <p>{x}</p>
                <span onClick={()=>deleteLanguages(x)}>X</span>
              </div>
            })
          }
        </Tags>

        <div>
          <p className="Clear" onClick={deleteTags}>Clear</p>
        </div>

      </TagsContainer>
      {

        isFilter ?
          data.filter((job, i) => {
            return (
              (job.level === labels.level || job.role === labels.role) ||
              (job.level === labels.level && job.role === labels.role) ||
              job.languages.some(v => labels.languages.includes(v))
            )
          }).map((x, j) => {
            return <CardJob
              x={x}
              isNew={x.new}
              isFeatured={x.featured}
              key={x.id}
              position={x.position}
              company={x.company}
              logo={x.logo}
              role={x.role}
              level={x.level}
              postedAt={x.postedAt}
              contract={x.contract}
              location={x.location}
              languages={x.languages}              
              addRole={addRole}
              addLevel={addLevel}
              addLanguages={addLanguages}
            />
          })

          : data.map((x, i) => {
            return <CardJob
              isNew={x.new}
              isFeatured={x.featured}
              key={i}
              position={x.position}
              company={x.company}
              logo={x.logo}
              role={x.role}
              level={x.level}
              postedAt={x.postedAt}
              contract={x.contract}
              location={x.location}
              languages={x.languages}              
              addRole={addRole}
              addLevel={addLevel}
              addLanguages={addLanguages}
            />
          })
      }
    </Container>
  );
}

export default App;
