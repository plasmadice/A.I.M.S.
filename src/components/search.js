import React, { useState } from "react"
import { Input } from "semantic-ui-react"
import { useLazyQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const GET_SHOW = gql`
  query getMedia($search: String!) {
    Media(search: $search, type: ANIME) {
      id
      idMal
      genres
      episodes
      title {
        english
        userPreferred
      }
      coverImage {
        large
        color
      }
    }
  }
`

const Search = ({ setResults }) => {
  const [formValue, setFormValue] = useState("")
  const [hold, setHold] = useState(0) // to hold timeout signature
  const [getShow, { loading, data }] = useLazyQuery(GET_SHOW)

  if (data && data.Media) {
    console.log(data)
  }

  let handleSearch = e => {
    setFormValue(e.target.value)

    if (formValue.length >= 3) {
      clearTimeout(hold)

      setHold(
        setTimeout(() => {
          getShow({ variables: { search: formValue } })
        }, 1500)
      )
    }
  }

  return (
    <Input
      placeholder="search"
      size="big"
      loading={loading}
      icon="search"
      iconPosition="left"
      value={formValue}
      onChange={handleSearch}
    />
  )
}

export default Search
