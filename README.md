



const md = `
| Name  | Age | Country | Website            |
|-------|-----|---------|--------------------|
| John  | 25  | USA     | [John's Website](https://example.com/john) |
| Alice | 30  | Canada  | [Alice's Website](https://example.com/alice) |
`;



to 



```json
 [
  {
    Name: 'John',
    Age: '25',
    Country: 'USA',
    Website: 'https://example.com/john'
  },
  {
    Name: 'John',
    Age: '25',
    Country: 'USA',
    Website: 'https://example.com/john'
  },
  {
    Name: 'John',
    Age: '25',
    Country: 'USA',
    Website: 'https://example.com/john'
  },
  {
    Name: 'John',
    Age: '25',
    Country: 'USA',
    Website: 'https://example.com/john'
  },
  {
    Name: 'Alice',
    Age: '30',
    Country: 'Canada',
    Website: 'https://example.com/alice'
  },
  {
    Name: 'Alice',
    Age: '30',
    Country: 'Canada',
    Website: 'https://example.com/alice'
  },
  {
    Name: 'Alice',
    Age: '30',
    Country: 'Canada',
    Website: 'https://example.com/alice'
  },
  {
    Name: 'Alice',
    Age: '30',
    Country: 'Canada',
    Website: 'https://example.com/alice'
  }
]

```