import React from "react"
import { Card, Image, Item } from "semantic-ui-react"

const Results = ({ results, type }) => {
  if (results === null) {
    return null
  }

  if (type === "card") {
    return (
      <Card.Group centered>
        {results.Page.media.map(item => {
          const {
            id,
            genres,
            episodes,
            format,
            title,
            coverImage,
            averageScore,
            startDate,
            endDate,
            description,
            siteUrl,
          } = item
          const name = title.userPreferred || title.english || title.romaji
          const reducedDescription = description.split("<br>")[0]

          return (
            <Card key={id}>
              <Image fluid src={coverImage.large} />
              <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>
                  {startDate.month}/{startDate.year} -{" "}
                  {endDate.month === null
                    ? "Currently Airing"
                    : `${endDate.month}/
                  ${endDate.year}`}
                </Card.Meta>
                <Card.Meta>
                  {episodes === null || format === "MOVIE"
                    ? format
                    : `${format} | ${episodes} episodes`}
                </Card.Meta>
                <Card.Description
                  //TODO: Fix description text to remove <br><br> and <br> <br>
                  style={{ maxHeight: "200px", overflow: "auto" }}
                >
                  {reducedDescription}...
                  <a href={siteUrl} target="_blank">
                    Read More
                  </a>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>{genres.join(", ")}</Card.Content>
            </Card>
          )
        })}
      </Card.Group>
    )
  } else {
    return (
      <Item.Group>
        {results.Page.media.map(item => {
          const {
            id,
            genres,
            episodes,
            format,
            title,
            coverImage,
            averageScore,
            startDate,
            endDate,
            description,
            siteUrl,
          } = item

          const name = title.userPreferred || title.english || title.romaji
          const reducedDescription = description.split("<br>")[0]

          return (
            <Item key={id}>
              <Item.Image src={coverImage.large} />
              <Item.Content>
                <Item.Header>{name}</Item.Header>
                <Item.Meta>
                  {startDate.month}/{startDate.year} -{" "}
                  {endDate.month === null
                    ? "Currently Airing"
                    : `${endDate.month}/
                  ${endDate.year}`}
                </Item.Meta>
                <Item.Meta>
                  {episodes === null || format === "MOVIE"
                    ? format
                    : `${format} | ${episodes} episodes`}
                </Item.Meta>
                <Item.Description>
                  {reducedDescription}...
                  <a href={siteUrl} target="_blank">
                    Read More
                  </a>
                </Item.Description>
                <Item.Extra>{genres.join(", ")}</Item.Extra>
              </Item.Content>
            </Item>
          )
        })}
      </Item.Group>
    )
  }
}

export default Results
