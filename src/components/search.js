import React, { useState } from "react"
import { Input } from "semantic-ui-react"
import { useLazyQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const GET_SHOWS = gql`
  query getSeries($search: String!) {
    Page(perPage: 10) {
      media(search: $search, type: ANIME) {
        id
        idMal
        genres
        format
        episodes
        description
        title {
          english
          userPreferred
          romaji
        }
        coverImage {
          large
          color
        }
        averageScore
        tags {
          name
        }
        startDate {
          month
          year
        }
        endDate {
          month
          year
        }
      }
    }
  }
`

const Search = ({ setResults }) => {
  const [formValue, setFormValue] = useState("")
  const [hold, setHold] = useState(0) // to hold timeout signature
  const [getShows, { loading, data, onError }] = useLazyQuery(GET_SHOWS)

  if (data) {
    setResults(data)
    console.log(data)
  }

  let handleSearch = e => {
    setFormValue(e.target.value)

    if (formValue.length >= 3) {
      clearTimeout(hold)

      setHold(
        setTimeout(() => {
          getShows({ variables: { search: formValue } })
        }, 100)
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
