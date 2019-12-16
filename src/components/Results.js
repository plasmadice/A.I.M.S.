import React from "react"
import { Card, Image } from "semantic-ui-react"

const Results = ({ results }) => {
  console.log(results)

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
        } = item
        const name = title.userPreferred || title.english || title.romaji

        return (
          <Card key={id}>
            <Image fluid src={coverImage.large} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>
                {episodes === null || format === "MOVIE"
                  ? format
                  : `${format} | ${episodes} episodes`}
              </Card.Meta>
              <Card.Description
                //TODO: Fix description text to remove <br><br> and <br> <br>
                style={{ maxHeight: "200px", overflow: "auto" }}
              >
                {description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>{genres.join(", ")}</Card.Content>
          </Card>
        )
      })}
    </Card.Group>
  )
}

export default Results
