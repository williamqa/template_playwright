module.exports = {
  type: 'object',
  postItemSchema: {
    $id: 'http://example.com/example.json',
    type: 'object',
    default: {},
    title: 'Root Schema',
    required: ['status', 'message', 'data', 'error'],
    properties: {
      status: {
        type: 'string',
        default: '',
        title: 'The status Schema',
        examples: ['success']
      },
      message: {
        type: 'string',
        default: '',
        title: 'The message Schema',
        examples: ['Itemcreated']
      },
      data: {
        type: 'object',
        default: {},
        title: 'The data Schema',
        required: [
          'description',
          'status',
          'owner',
          'itemType',
          'complement',
          'itemGroup',
          'createdAt',
          'updatedAt',
          'deletedAt',
          'id'
        ],
        properties: {
          description: {
            type: 'string',
            default: '',
            title: 'The description Schema',
            examples: ['Caneta Cacto']
          },
          status: {
            type: 'string',
            default: '',
            title: 'The status Schema',
            examples: ['active']
          },
          owner: {
            type: 'object',
            default: {},
            title: 'The owner Schema',
            required: [
              'user',
              'master',
              'company',
              'establishment',
              'group',
              'username'
            ],
            properties: {
              user: {
                type: 'string',
                default: '',
                title: 'The user Schema',
                examples: ['POSTMAN Randy_Altenwerth']
              },
              master: {
                type: 'string',
                default: '',
                title: 'The master Schema',
                examples: ['b52aaba413aa104dc216cb6219212c07']
              },
              company: {
                type: 'string',
                default: '',
                title: 'The company Schema',
                examples: ['ROIT INNOVATION DESENVOLVIMENTO S/A']
              },
              establishment: {
                type: 'string',
                default: '',
                title: 'The establishment Schema',
                examples: ['API AUTOMATION']
              },
              group: {
                type: 'string',
                default: '',
                title: 'The group Schema',
                examples: ['API-TA ITEM']
              },
              username: {
                type: 'null',
                default: null,
                title: 'The username Schema',
                examples: [null]
              }
            }
          },
          itemType: {
            type: 'string',
            default: '',
            title: 'The itemType Schema',
            examples: ['product']
          },
          complement: {
            type: 'string',
            default: '',
            title: 'The complement Schema',
            examples: ['quam dolorem eligendi']
          },
          itemGroup: {
            type: 'object',
            default: {},
            title: 'The itemGroup Schema',
            required: ['id', 'label'],
            properties: {
              id: {
                type: 'string',
                default: '',
                title: 'The id Schema',
                examples: ['5d7c0b40-2cc7-498c-a835-45026361aff4']
              },
              label: {
                type: 'string',
                default: '',
                title: 'The label Schema',
                examples: ['Papelaria']
              }
            }
          },
          createdAt: {
            type: 'string',
            default: '',
            title: 'The createdAt Schema',
            examples: ['2022-12-07T12:22:06.431987']
          },
          updatedAt: {
            type: 'string',
            default: '',
            title: 'The updatedAt Schema',
            examples: ['2022-12-07T12:22:06.431987']
          },
          deletedAt: {
            type: 'null',
            default: null,
            title: 'The deletedAt Schema',
            examples: [null]
          },
          id: {
            type: 'string',
            default: '',
            title: 'The id Schema',
            examples: ['c5c12403-2d9b-4dda-a819-d3722878093b']
          }
        }
      },
      error: {
        type: 'null',
        default: null,
        title: 'The error Schema',
        examples: [null]
      }
    }
  },
  getItemSchema: {
    $id: 'http://example.com/example.json',
    type: 'object',
    default: {},
    title: 'Root Schema',
    required: ['status', 'message', 'data', 'error'],
    properties: {
      status: {
        type: 'string',
        default: '',
        title: 'The status Schema',
        examples: ['success']
      },
      message: {
        type: 'string',
        default: '',
        title: 'The message Schema',
        examples: ['Item list']
      },
      data: {
        type: 'array',
        default: [],
        title: 'The data Schema',
        items: {
          type: 'object',
          title: 'A Schema',
          required: [
            'ledgerAccount',
            'status',
            'value',
            'paymentForm',
            'updatedAt',
            'imageUrl',
            'eanCode',
            'manufacturer',
            'createdAt',
            'erpCode',
            'description',
            'complement',
            'supplier',
            'costObject',
            'id',
            'unity',
            'itemGroup',
            'owner',
            'itemType',
            'finality',
            'deletedAt'
          ],
          properties: {
            ledgerAccount: {
              type: 'null',
              title: 'The ledgerAccount Schema',
              examples: [null]
            },
            status: {
              type: 'string',
              title: 'The status Schema',
              examples: ['active']
            },
            value: {
              type: ['object', 'null'],
              title: 'The value Schema',
              required: ['currency', 'amount'],
              properties: {
                currency: {
                  type: 'string',
                  title: 'The currency Schema',
                  examples: ['BRL']
                },
                amount: {
                  type: 'number',
                  title: 'The amount Schema',
                  examples: [21.3, 20.5, 15.9, 550.9]
                }
              },
              examples: [
                {
                  currency: 'BRL',
                  amount: 21.3
                },
                {
                  amount: 20.5,
                  currency: 'BRL'
                },
                null,
                {
                  amount: 15.9,
                  currency: 'BRL'
                },
                {
                  amount: 20.5,
                  currency: 'BRL'
                },
                {
                  amount: 550.9,
                  currency: 'BRL'
                },
                {
                  amount: 550.9,
                  currency: 'BRL'
                }
              ]
            },
            paymentForm: {
              type: 'null',
              title: 'The paymentForm Schema',
              examples: [null]
            },
            updatedAt: {
              type: 'string',
              title: 'The updatedAt Schema',
              examples: [
                '2022-12-07T12:39:55.497938',
                '2022-12-07T16:48:15.049081',
                '2022-12-06T18:28:18.991750',
                '2022-12-07T12:36:23.705849',
                '2022-12-19T12:26:11.887994',
                '2022-12-07T12:44:21.204384',
                '2022-12-07T12:16:06.312073',
                '2022-12-07T12:22:06.431987',
                '2022-12-07T12:29:03.707429',
                '2022-12-07T12:41:00.878480',
                '2022-12-07T12:31:55.765847'
              ]
            },
            imageUrl: {
              type: ['string', 'null'],
              title: 'The imageUrl Schema',
              examples: [
                'https://cdn.awsli.com.br/600x700/846/846472/produto/39247659/acb5e43501.jpg',
                null,
                'https://a-static.mlcdn.com.br/800x560/caneta-para-tablet-trust-stylus-football-edit-brasil-18396/kmxsc/18396/13d426dd3b564354796ce3fe8f803db8.jpg',
                'https://http2.mlstatic.com/D_NQ_NP_2X_652002-MLB51493825794_092022-F.webp',
                'https://cf.shopee.com.br/file/6e0445389e46b7a0a88b1162a87375a4',
                'https://www.google.com/url?sa=i\u0026url=https%3A%2F%2Fshopee.com.br%2FCaneta-Grifin%25C3%25B3ria-em-Ouro-Harry-Potter-i.299593138.9267779732\u0026psig=AOvVaw06aCGGX60b2WB41Kcujle0\u0026ust=1670502329741000\u0026source=images\u0026cd=vfe\u0026ved=0CBAQjRxqFwoTCNjvw6TA5_sCFQAAAAAdAAAAABAD',
                'https://www.google.com/aclk?sa=l\u0026ai=DChcSEwi08ammw-f7AhVFQUgAHWO5C8AYABAjGgJjZQ\u0026sig=AOD64_2JA8KpdWdkT8-exEeYLwvJVSaLlA\u0026adurl\u0026ctype=5\u0026ved=2ahUKEwjvxJ-mw-f7AhX-FbkGHUU6AA4Quxd6BQgBENIC',
                'https://cf.shopee.com.br/file/0f1ad6ce92c2c6124e538577b5b864e9'
              ]
            },
            eanCode: {
              type: 'null',
              title: 'The eanCode Schema',
              examples: [null]
            },
            manufacturer: {
              type: 'null',
              title: 'The manufacturer Schema',
              examples: [null]
            },
            createdAt: {
              type: 'string',
              title: 'The createdAt Schema',
              examples: [
                '2022-12-07T12:39:55.497938',
                '2022-12-07T16:48:15.049081',
                '2022-12-06T18:28:18.991750',
                '2022-12-07T12:36:23.705849',
                '2022-12-19T12:26:11.887994',
                '2022-12-07T12:44:21.204384',
                '2022-12-07T12:16:06.312073',
                '2022-12-07T12:22:06.431987',
                '2022-12-07T12:29:03.707429',
                '2022-12-07T12:41:00.878480',
                '2022-12-07T12:31:55.765847'
              ]
            },
            erpCode: {
              type: 'null',
              title: 'The erpCode Schema',
              examples: [null]
            },
            description: {
              type: 'string',
              title: 'The description Schema',
              examples: [
                'Caneta Homem de Ferro',
                'Caneta Batman',
                'Caneta Preta',
                'Caneta Brasil',
                'Service Homem de Ferro 2',
                'Caneta Cacto',
                'Caneta Varinha Harry Potter',
                'Service Homem de Ferro',
                'Caneta Varinha Harry Potter 2'
              ]
            },
            complement: {
              type: 'string',
              title: 'The complement Schema',
              examples: [
                'sequi et et',
                'quos eius ut',
                'inventore qui ea',
                'delectus iure a',
                'sit saepe porro',
                'totam rerum culpa',
                'in et soluta',
                'quam dolorem eligendi',
                'vel est eos',
                'eaque enim fugiat',
                'consectetur repellendus tempore'
              ]
            },
            supplier: {
              type: 'null',
              title: 'The supplier Schema',
              examples: [null]
            },
            costObject: {
              type: 'null',
              title: 'The costObject Schema',
              examples: [null]
            },
            id: {
              type: 'string',
              title: 'The id Schema',
              examples: [
                '2521d388-040a-4187-9897-4d381f62fbca',
                '505898f2-1ba9-491f-be2a-ebce6de59609',
                '6afb907c-7356-4116-848b-aa78e9c6cb80',
                '6d4f114f-5225-4462-a14b-cc2f814e31e7',
                '724c23e4-0f9f-459b-9467-9cfa3d1a9f2f',
                '8183e0eb-d41c-418d-88da-531695ad60d7',
                '9ef5a4dc-3aa5-42e8-b2a4-3d5f9d50c81f',
                'c5c12403-2d9b-4dda-a819-d3722878093b',
                'cfa7d189-263b-4556-9366-52c112c52e45',
                'd3d56a6a-74af-4d37-a0dc-f2dc3c0384d8',
                'ee65a1f3-9196-457b-a7ec-2823193ef76a'
              ]
            },
            unity: {
              type: 'string',
              title: 'The unity Schema',
              examples: ['UN']
            },
            itemGroup: {
              type: 'object',
              title: 'The itemGroup Schema',
              required: ['label', 'id'],
              properties: {
                label: {
                  type: 'string',
                  title: 'The label Schema',
                  examples: ['Papelaria']
                },
                id: {
                  type: 'string',
                  title: 'The id Schema',
                  examples: ['5d7c0b40-2cc7-498c-a835-45026361aff4']
                }
              },
              examples: [
                {
                  label: 'Papelaria',
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                },
                {
                  label: 'Papelaria',
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
                },
                {
                  label: 'Papelaria',
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
                },
                {
                  id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                  label: 'Papelaria'
                }
              ]
            },
            owner: {
              type: 'object',
              title: 'The owner Schema',
              required: [
                'company',
                'master',
                'establishment',
                'user',
                'username',
                'group'
              ],
              properties: {
                company: {
                  type: 'string',
                  title: 'The company Schema',
                  examples: ['ROIT INNOVATION DESENVOLVIMENTO S/A']
                },
                master: {
                  type: 'string',
                  title: 'The master Schema',
                  examples: [
                    'b52aaba413aa104dc216cb6219212c07',
                    '24f44d6f06f812fe2b12d57111a47a95'
                  ]
                },
                establishment: {
                  type: 'string',
                  title: 'The establishment Schema',
                  examples: ['API AUTOMATION']
                },
                user: {
                  type: 'string',
                  title: 'The user Schema',
                  examples: [
                    'POSTMAN Christine17',
                    'POSTMAN Eloy.Bahringer',
                    'POSTMAN Abdullah.Heathcote32',
                    'POSTMAN Samantha_Langosh34',
                    'POSTMAN Deondre.Wintheiser17',
                    'POSTMAN Leopold.Becker',
                    'POSTMAN Sanford_Wyman54',
                    'POSTMAN Randy_Altenwerth',
                    'POSTMAN Kennith.Morissette',
                    'POSTMAN Susanna.Lindgren',
                    'POSTMAN Damian.McLaughlin12'
                  ]
                },
                username: {
                  type: 'null',
                  title: 'The username Schema',
                  examples: [null]
                },
                group: {
                  type: 'string',
                  title: 'The group Schema',
                  examples: ['API-TA ITEM']
                }
              },
              examples: [
                {
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  master: 'b52aaba413aa104dc216cb6219212c07',
                  establishment: 'API AUTOMATION',
                  user: 'POSTMAN Christine17',
                  username: null,
                  group: 'API-TA ITEM'
                },
                {
                  group: 'API-TA ITEM',
                  username: null,
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  establishment: 'API AUTOMATION',
                  user: 'POSTMAN Eloy.Bahringer',
                  master: 'b52aaba413aa104dc216cb6219212c07'
                },
                {
                  group: 'API-TA ITEM',
                  username: null,
                  master: '24f44d6f06f812fe2b12d57111a47a95',
                  user: 'POSTMAN Abdullah.Heathcote32',
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  establishment: 'API AUTOMATION'
                },
                {
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  establishment: 'API AUTOMATION',
                  username: null,
                  master: 'b52aaba413aa104dc216cb6219212c07',
                  user: 'POSTMAN Samantha_Langosh34',
                  group: 'API-TA ITEM'
                },
                {
                  username: null,
                  user: 'POSTMAN Deondre.Wintheiser17',
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  master: 'b52aaba413aa104dc216cb6219212c07',
                  establishment: 'API AUTOMATION',
                  group: 'API-TA ITEM'
                },
                {
                  group: 'API-TA ITEM',
                  user: 'POSTMAN Leopold.Becker',
                  master: 'b52aaba413aa104dc216cb6219212c07',
                  username: null,
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  establishment: 'API AUTOMATION'
                },
                {
                  master: '24f44d6f06f812fe2b12d57111a47a95',
                  user: 'POSTMAN Sanford_Wyman54',
                  establishment: 'API AUTOMATION',
                  group: 'API-TA ITEM',
                  username: null,
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
                },
                {
                  group: 'API-TA ITEM',
                  master: 'b52aaba413aa104dc216cb6219212c07',
                  username: null,
                  establishment: 'API AUTOMATION',
                  user: 'POSTMAN Randy_Altenwerth',
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
                },
                {
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  group: 'API-TA ITEM',
                  master: 'b52aaba413aa104dc216cb6219212c07',
                  user: 'POSTMAN Kennith.Morissette',
                  establishment: 'API AUTOMATION',
                  username: null
                },
                {
                  user: 'POSTMAN Susanna.Lindgren',
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  master: 'b52aaba413aa104dc216cb6219212c07',
                  group: 'API-TA ITEM',
                  username: null,
                  establishment: 'API AUTOMATION'
                },
                {
                  group: 'API-TA ITEM',
                  user: 'POSTMAN Damian.McLaughlin12',
                  company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                  username: null,
                  establishment: 'API AUTOMATION',
                  master: 'b52aaba413aa104dc216cb6219212c07'
                }
              ]
            },
            itemType: {
              type: 'string',
              title: 'The itemType Schema',
              examples: ['product', 'service']
            },
            finality: {
              type: 'null',
              title: 'The finality Schema',
              examples: [null]
            },
            deletedAt: {
              type: 'null',
              title: 'The deletedAt Schema',
              examples: [null]
            }
          },
          examples: [
            {
              ledgerAccount: null,
              status: 'active',
              value: {
                currency: 'BRL',
                amount: 21.3
              },
              paymentForm: null,
              updatedAt: '2022-12-07T12:39:55.497938',
              imageUrl:
                'https://cdn.awsli.com.br/600x700/846/846472/produto/39247659/acb5e43501.jpg',
              eanCode: null,
              manufacturer: null,
              createdAt: '2022-12-07T12:39:55.497938',
              erpCode: null,
              description: 'Caneta Homem de Ferro',
              complement: 'sequi et et',
              supplier: null,
              costObject: null,
              id: '2521d388-040a-4187-9897-4d381f62fbca',
              unity: 'UN',
              itemGroup: {
                label: 'Papelaria',
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
              },
              owner: {
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                master: 'b52aaba413aa104dc216cb6219212c07',
                establishment: 'API AUTOMATION',
                user: 'POSTMAN Christine17',
                username: null,
                group: 'API-TA ITEM'
              },
              itemType: 'product',
              finality: null,
              deletedAt: null
            },
            {
              status: 'active',
              updatedAt: '2022-12-07T16:48:15.049081',
              erpCode: null,
              supplier: null,
              manufacturer: null,
              itemType: 'product',
              deletedAt: null,
              owner: {
                group: 'API-TA ITEM',
                username: null,
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION',
                user: 'POSTMAN Eloy.Bahringer',
                master: 'b52aaba413aa104dc216cb6219212c07'
              },
              imageUrl: null,
              value: {
                amount: 20.5,
                currency: 'BRL'
              },
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              costObject: null,
              id: '505898f2-1ba9-491f-be2a-ebce6de59609',
              eanCode: null,
              ledgerAccount: null,
              paymentForm: null,
              finality: null,
              complement: 'quos eius ut',
              description: 'Caneta Batman',
              createdAt: '2022-12-07T16:48:15.049081',
              unity: 'UN'
            },
            {
              imageUrl: null,
              updatedAt: '2022-12-06T18:28:18.991750',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              eanCode: null,
              value: null,
              itemType: 'product',
              complement: 'inventore qui ea',
              paymentForm: null,
              erpCode: null,
              status: 'active',
              description: 'Caneta Preta',
              finality: null,
              deletedAt: null,
              id: '6afb907c-7356-4116-848b-aa78e9c6cb80',
              unity: 'UN',
              supplier: null,
              costObject: null,
              manufacturer: null,
              ledgerAccount: null,
              owner: {
                group: 'API-TA ITEM',
                username: null,
                master: '24f44d6f06f812fe2b12d57111a47a95',
                user: 'POSTMAN Abdullah.Heathcote32',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION'
              },
              createdAt: '2022-12-06T18:28:18.991750'
            },
            {
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              manufacturer: null,
              ledgerAccount: null,
              value: {
                amount: 15.9,
                currency: 'BRL'
              },
              costObject: null,
              supplier: null,
              deletedAt: null,
              updatedAt: '2022-12-07T12:36:23.705849',
              owner: {
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION',
                username: null,
                master: 'b52aaba413aa104dc216cb6219212c07',
                user: 'POSTMAN Samantha_Langosh34',
                group: 'API-TA ITEM'
              },
              status: 'active',
              erpCode: null,
              id: '6d4f114f-5225-4462-a14b-cc2f814e31e7',
              complement: 'delectus iure a',
              itemType: 'product',
              unity: 'UN',
              imageUrl:
                'https://a-static.mlcdn.com.br/800x560/caneta-para-tablet-trust-stylus-football-edit-brasil-18396/kmxsc/18396/13d426dd3b564354796ce3fe8f803db8.jpg',
              eanCode: null,
              createdAt: '2022-12-07T12:36:23.705849',
              finality: null,
              paymentForm: null,
              description: 'Caneta Brasil'
            },
            {
              erpCode: null,
              complement: 'sit saepe porro',
              status: 'active',
              description: 'Caneta Batman',
              deletedAt: null,
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              finality: null,
              paymentForm: null,
              itemType: 'product',
              ledgerAccount: null,
              value: {
                amount: 20.5,
                currency: 'BRL'
              },
              updatedAt: '2022-12-19T12:26:11.887994',
              eanCode: null,
              unity: 'UN',
              owner: {
                username: null,
                user: 'POSTMAN Deondre.Wintheiser17',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                master: 'b52aaba413aa104dc216cb6219212c07',
                establishment: 'API AUTOMATION',
                group: 'API-TA ITEM'
              },
              costObject: null,
              imageUrl: null,
              id: '724c23e4-0f9f-459b-9467-9cfa3d1a9f2f',
              supplier: null,
              manufacturer: null,
              createdAt: '2022-12-19T12:26:11.887994'
            },
            {
              finality: null,
              costObject: null,
              eanCode: null,
              itemType: 'service',
              id: '8183e0eb-d41c-418d-88da-531695ad60d7',
              status: 'active',
              paymentForm: null,
              owner: {
                group: 'API-TA ITEM',
                user: 'POSTMAN Leopold.Becker',
                master: 'b52aaba413aa104dc216cb6219212c07',
                username: null,
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION'
              },
              value: {
                amount: 550.9,
                currency: 'BRL'
              },
              deletedAt: null,
              ledgerAccount: null,
              manufacturer: null,
              updatedAt: '2022-12-07T12:44:21.204384',
              erpCode: null,
              createdAt: '2022-12-07T12:44:21.204384',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              description: 'Service Homem de Ferro 2',
              supplier: null,
              imageUrl:
                'https://http2.mlstatic.com/D_NQ_NP_2X_652002-MLB51493825794_092022-F.webp',
              unity: 'UN',
              complement: 'totam rerum culpa'
            },
            {
              erpCode: null,
              complement: 'in et soluta',
              deletedAt: null,
              itemType: 'product',
              costObject: null,
              description: 'Caneta Cacto',
              imageUrl:
                'https://cf.shopee.com.br/file/6e0445389e46b7a0a88b1162a87375a4',
              status: 'active',
              value: null,
              owner: {
                master: '24f44d6f06f812fe2b12d57111a47a95',
                user: 'POSTMAN Sanford_Wyman54',
                establishment: 'API AUTOMATION',
                group: 'API-TA ITEM',
                username: null,
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
              },
              supplier: null,
              eanCode: null,
              manufacturer: null,
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              finality: null,
              paymentForm: null,
              createdAt: '2022-12-07T12:16:06.312073',
              id: '9ef5a4dc-3aa5-42e8-b2a4-3d5f9d50c81f',
              unity: 'UN',
              ledgerAccount: null,
              updatedAt: '2022-12-07T12:16:06.312073'
            },
            {
              manufacturer: null,
              eanCode: null,
              erpCode: null,
              ledgerAccount: null,
              costObject: null,
              value: null,
              itemType: 'product',
              updatedAt: '2022-12-07T12:22:06.431987',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              complement: 'quam dolorem eligendi',
              description: 'Caneta Cacto',
              paymentForm: null,
              createdAt: '2022-12-07T12:22:06.431987',
              supplier: null,
              id: 'c5c12403-2d9b-4dda-a819-d3722878093b',
              deletedAt: null,
              status: 'active',
              owner: {
                group: 'API-TA ITEM',
                master: 'b52aaba413aa104dc216cb6219212c07',
                username: null,
                establishment: 'API AUTOMATION',
                user: 'POSTMAN Randy_Altenwerth',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
              },
              unity: 'UN',
              imageUrl:
                'https://cf.shopee.com.br/file/6e0445389e46b7a0a88b1162a87375a4',
              finality: null
            },
            {
              imageUrl:
                'https://www.google.com/url?sa=i\u0026url=https%3A%2F%2Fshopee.com.br%2FCaneta-Grifin%25C3%25B3ria-em-Ouro-Harry-Potter-i.299593138.9267779732\u0026psig=AOvVaw06aCGGX60b2WB41Kcujle0\u0026ust=1670502329741000\u0026source=images\u0026cd=vfe\u0026ved=0CBAQjRxqFwoTCNjvw6TA5_sCFQAAAAAdAAAAABAD',
              erpCode: null,
              deletedAt: null,
              eanCode: null,
              description: 'Caneta Varinha Harry Potter',
              status: 'active',
              complement: 'vel est eos',
              itemGroup: {
                label: 'Papelaria',
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
              },
              manufacturer: null,
              itemType: 'product',
              supplier: null,
              updatedAt: '2022-12-07T12:29:03.707429',
              value: null,
              finality: null,
              createdAt: '2022-12-07T12:29:03.707429',
              unity: 'UN',
              paymentForm: null,
              id: 'cfa7d189-263b-4556-9366-52c112c52e45',
              owner: {
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                group: 'API-TA ITEM',
                master: 'b52aaba413aa104dc216cb6219212c07',
                user: 'POSTMAN Kennith.Morissette',
                establishment: 'API AUTOMATION',
                username: null
              },
              costObject: null,
              ledgerAccount: null
            },
            {
              erpCode: null,
              createdAt: '2022-12-07T12:41:00.878480',
              itemType: 'service',
              paymentForm: null,
              owner: {
                user: 'POSTMAN Susanna.Lindgren',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                master: 'b52aaba413aa104dc216cb6219212c07',
                group: 'API-TA ITEM',
                username: null,
                establishment: 'API AUTOMATION'
              },
              id: 'd3d56a6a-74af-4d37-a0dc-f2dc3c0384d8',
              value: {
                amount: 550.9,
                currency: 'BRL'
              },
              imageUrl:
                'https://www.google.com/aclk?sa=l\u0026ai=DChcSEwi08ammw-f7AhVFQUgAHWO5C8AYABAjGgJjZQ\u0026sig=AOD64_2JA8KpdWdkT8-exEeYLwvJVSaLlA\u0026adurl\u0026ctype=5\u0026ved=2ahUKEwjvxJ-mw-f7AhX-FbkGHUU6AA4Quxd6BQgBENIC',
              complement: 'eaque enim fugiat',
              finality: null,
              status: 'active',
              description: 'Service Homem de Ferro',
              manufacturer: null,
              ledgerAccount: null,
              supplier: null,
              costObject: null,
              eanCode: null,
              unity: 'UN',
              updatedAt: '2022-12-07T12:41:00.878480',
              itemGroup: {
                label: 'Papelaria',
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
              },
              deletedAt: null
            },
            {
              costObject: null,
              owner: {
                group: 'API-TA ITEM',
                user: 'POSTMAN Damian.McLaughlin12',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                username: null,
                establishment: 'API AUTOMATION',
                master: 'b52aaba413aa104dc216cb6219212c07'
              },
              updatedAt: '2022-12-07T12:31:55.765847',
              itemType: 'product',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              supplier: null,
              complement: 'consectetur repellendus tempore',
              deletedAt: null,
              ledgerAccount: null,
              id: 'ee65a1f3-9196-457b-a7ec-2823193ef76a',
              unity: 'UN',
              finality: null,
              status: 'active',
              imageUrl:
                'https://cf.shopee.com.br/file/0f1ad6ce92c2c6124e538577b5b864e9',
              description: 'Caneta Varinha Harry Potter 2',
              eanCode: null,
              manufacturer: null,
              value: null,
              erpCode: null,
              paymentForm: null,
              createdAt: '2022-12-07T12:31:55.765847'
            }
          ]
        },
        examples: [
          [
            {
              ledgerAccount: null,
              status: 'active',
              value: {
                currency: 'BRL',
                amount: 21.3
              },
              paymentForm: null,
              updatedAt: '2022-12-07T12:39:55.497938',
              imageUrl:
                'https://cdn.awsli.com.br/600x700/846/846472/produto/39247659/acb5e43501.jpg',
              eanCode: null,
              manufacturer: null,
              createdAt: '2022-12-07T12:39:55.497938',
              erpCode: null,
              description: 'Caneta Homem de Ferro',
              complement: 'sequi et et',
              supplier: null,
              costObject: null,
              id: '2521d388-040a-4187-9897-4d381f62fbca',
              unity: 'UN',
              itemGroup: {
                label: 'Papelaria',
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
              },
              owner: {
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                master: 'b52aaba413aa104dc216cb6219212c07',
                establishment: 'API AUTOMATION',
                user: 'POSTMAN Christine17',
                username: null,
                group: 'API-TA ITEM'
              },
              itemType: 'product',
              finality: null,
              deletedAt: null
            },
            {
              status: 'active',
              updatedAt: '2022-12-07T16:48:15.049081',
              erpCode: null,
              supplier: null,
              manufacturer: null,
              itemType: 'product',
              deletedAt: null,
              owner: {
                group: 'API-TA ITEM',
                username: null,
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION',
                user: 'POSTMAN Eloy.Bahringer',
                master: 'b52aaba413aa104dc216cb6219212c07'
              },
              imageUrl: null,
              value: {
                amount: 20.5,
                currency: 'BRL'
              },
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              costObject: null,
              id: '505898f2-1ba9-491f-be2a-ebce6de59609',
              eanCode: null,
              ledgerAccount: null,
              paymentForm: null,
              finality: null,
              complement: 'quos eius ut',
              description: 'Caneta Batman',
              createdAt: '2022-12-07T16:48:15.049081',
              unity: 'UN'
            },
            {
              imageUrl: null,
              updatedAt: '2022-12-06T18:28:18.991750',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              eanCode: null,
              value: null,
              itemType: 'product',
              complement: 'inventore qui ea',
              paymentForm: null,
              erpCode: null,
              status: 'active',
              description: 'Caneta Preta',
              finality: null,
              deletedAt: null,
              id: '6afb907c-7356-4116-848b-aa78e9c6cb80',
              unity: 'UN',
              supplier: null,
              costObject: null,
              manufacturer: null,
              ledgerAccount: null,
              owner: {
                group: 'API-TA ITEM',
                username: null,
                master: '24f44d6f06f812fe2b12d57111a47a95',
                user: 'POSTMAN Abdullah.Heathcote32',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION'
              },
              createdAt: '2022-12-06T18:28:18.991750'
            },
            {
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              manufacturer: null,
              ledgerAccount: null,
              value: {
                amount: 15.9,
                currency: 'BRL'
              },
              costObject: null,
              supplier: null,
              deletedAt: null,
              updatedAt: '2022-12-07T12:36:23.705849',
              owner: {
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION',
                username: null,
                master: 'b52aaba413aa104dc216cb6219212c07',
                user: 'POSTMAN Samantha_Langosh34',
                group: 'API-TA ITEM'
              },
              status: 'active',
              erpCode: null,
              id: '6d4f114f-5225-4462-a14b-cc2f814e31e7',
              complement: 'delectus iure a',
              itemType: 'product',
              unity: 'UN',
              imageUrl:
                'https://a-static.mlcdn.com.br/800x560/caneta-para-tablet-trust-stylus-football-edit-brasil-18396/kmxsc/18396/13d426dd3b564354796ce3fe8f803db8.jpg',
              eanCode: null,
              createdAt: '2022-12-07T12:36:23.705849',
              finality: null,
              paymentForm: null,
              description: 'Caneta Brasil'
            },
            {
              erpCode: null,
              complement: 'sit saepe porro',
              status: 'active',
              description: 'Caneta Batman',
              deletedAt: null,
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              finality: null,
              paymentForm: null,
              itemType: 'product',
              ledgerAccount: null,
              value: {
                amount: 20.5,
                currency: 'BRL'
              },
              updatedAt: '2022-12-19T12:26:11.887994',
              eanCode: null,
              unity: 'UN',
              owner: {
                username: null,
                user: 'POSTMAN Deondre.Wintheiser17',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                master: 'b52aaba413aa104dc216cb6219212c07',
                establishment: 'API AUTOMATION',
                group: 'API-TA ITEM'
              },
              costObject: null,
              imageUrl: null,
              id: '724c23e4-0f9f-459b-9467-9cfa3d1a9f2f',
              supplier: null,
              manufacturer: null,
              createdAt: '2022-12-19T12:26:11.887994'
            },
            {
              finality: null,
              costObject: null,
              eanCode: null,
              itemType: 'service',
              id: '8183e0eb-d41c-418d-88da-531695ad60d7',
              status: 'active',
              paymentForm: null,
              owner: {
                group: 'API-TA ITEM',
                user: 'POSTMAN Leopold.Becker',
                master: 'b52aaba413aa104dc216cb6219212c07',
                username: null,
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                establishment: 'API AUTOMATION'
              },
              value: {
                amount: 550.9,
                currency: 'BRL'
              },
              deletedAt: null,
              ledgerAccount: null,
              manufacturer: null,
              updatedAt: '2022-12-07T12:44:21.204384',
              erpCode: null,
              createdAt: '2022-12-07T12:44:21.204384',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              description: 'Service Homem de Ferro 2',
              supplier: null,
              imageUrl:
                'https://http2.mlstatic.com/D_NQ_NP_2X_652002-MLB51493825794_092022-F.webp',
              unity: 'UN',
              complement: 'totam rerum culpa'
            },
            {
              erpCode: null,
              complement: 'in et soluta',
              deletedAt: null,
              itemType: 'product',
              costObject: null,
              description: 'Caneta Cacto',
              imageUrl:
                'https://cf.shopee.com.br/file/6e0445389e46b7a0a88b1162a87375a4',
              status: 'active',
              value: null,
              owner: {
                master: '24f44d6f06f812fe2b12d57111a47a95',
                user: 'POSTMAN Sanford_Wyman54',
                establishment: 'API AUTOMATION',
                group: 'API-TA ITEM',
                username: null,
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
              },
              supplier: null,
              eanCode: null,
              manufacturer: null,
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              finality: null,
              paymentForm: null,
              createdAt: '2022-12-07T12:16:06.312073',
              id: '9ef5a4dc-3aa5-42e8-b2a4-3d5f9d50c81f',
              unity: 'UN',
              ledgerAccount: null,
              updatedAt: '2022-12-07T12:16:06.312073'
            },
            {
              manufacturer: null,
              eanCode: null,
              erpCode: null,
              ledgerAccount: null,
              costObject: null,
              value: null,
              itemType: 'product',
              updatedAt: '2022-12-07T12:22:06.431987',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              complement: 'quam dolorem eligendi',
              description: 'Caneta Cacto',
              paymentForm: null,
              createdAt: '2022-12-07T12:22:06.431987',
              supplier: null,
              id: 'c5c12403-2d9b-4dda-a819-d3722878093b',
              deletedAt: null,
              status: 'active',
              owner: {
                group: 'API-TA ITEM',
                master: 'b52aaba413aa104dc216cb6219212c07',
                username: null,
                establishment: 'API AUTOMATION',
                user: 'POSTMAN Randy_Altenwerth',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
              },
              unity: 'UN',
              imageUrl:
                'https://cf.shopee.com.br/file/6e0445389e46b7a0a88b1162a87375a4',
              finality: null
            },
            {
              imageUrl:
                'https://www.google.com/url?sa=i\u0026url=https%3A%2F%2Fshopee.com.br%2FCaneta-Grifin%25C3%25B3ria-em-Ouro-Harry-Potter-i.299593138.9267779732\u0026psig=AOvVaw06aCGGX60b2WB41Kcujle0\u0026ust=1670502329741000\u0026source=images\u0026cd=vfe\u0026ved=0CBAQjRxqFwoTCNjvw6TA5_sCFQAAAAAdAAAAABAD',
              erpCode: null,
              deletedAt: null,
              eanCode: null,
              description: 'Caneta Varinha Harry Potter',
              status: 'active',
              complement: 'vel est eos',
              itemGroup: {
                label: 'Papelaria',
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
              },
              manufacturer: null,
              itemType: 'product',
              supplier: null,
              updatedAt: '2022-12-07T12:29:03.707429',
              value: null,
              finality: null,
              createdAt: '2022-12-07T12:29:03.707429',
              unity: 'UN',
              paymentForm: null,
              id: 'cfa7d189-263b-4556-9366-52c112c52e45',
              owner: {
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                group: 'API-TA ITEM',
                master: 'b52aaba413aa104dc216cb6219212c07',
                user: 'POSTMAN Kennith.Morissette',
                establishment: 'API AUTOMATION',
                username: null
              },
              costObject: null,
              ledgerAccount: null
            },
            {
              erpCode: null,
              createdAt: '2022-12-07T12:41:00.878480',
              itemType: 'service',
              paymentForm: null,
              owner: {
                user: 'POSTMAN Susanna.Lindgren',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                master: 'b52aaba413aa104dc216cb6219212c07',
                group: 'API-TA ITEM',
                username: null,
                establishment: 'API AUTOMATION'
              },
              id: 'd3d56a6a-74af-4d37-a0dc-f2dc3c0384d8',
              value: {
                amount: 550.9,
                currency: 'BRL'
              },
              imageUrl:
                'https://www.google.com/aclk?sa=l\u0026ai=DChcSEwi08ammw-f7AhVFQUgAHWO5C8AYABAjGgJjZQ\u0026sig=AOD64_2JA8KpdWdkT8-exEeYLwvJVSaLlA\u0026adurl\u0026ctype=5\u0026ved=2ahUKEwjvxJ-mw-f7AhX-FbkGHUU6AA4Quxd6BQgBENIC',
              complement: 'eaque enim fugiat',
              finality: null,
              status: 'active',
              description: 'Service Homem de Ferro',
              manufacturer: null,
              ledgerAccount: null,
              supplier: null,
              costObject: null,
              eanCode: null,
              unity: 'UN',
              updatedAt: '2022-12-07T12:41:00.878480',
              itemGroup: {
                label: 'Papelaria',
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
              },
              deletedAt: null
            },
            {
              costObject: null,
              owner: {
                group: 'API-TA ITEM',
                user: 'POSTMAN Damian.McLaughlin12',
                company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
                username: null,
                establishment: 'API AUTOMATION',
                master: 'b52aaba413aa104dc216cb6219212c07'
              },
              updatedAt: '2022-12-07T12:31:55.765847',
              itemType: 'product',
              itemGroup: {
                id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
                label: 'Papelaria'
              },
              supplier: null,
              complement: 'consectetur repellendus tempore',
              deletedAt: null,
              ledgerAccount: null,
              id: 'ee65a1f3-9196-457b-a7ec-2823193ef76a',
              unity: 'UN',
              finality: null,
              status: 'active',
              imageUrl:
                'https://cf.shopee.com.br/file/0f1ad6ce92c2c6124e538577b5b864e9',
              description: 'Caneta Varinha Harry Potter 2',
              eanCode: null,
              manufacturer: null,
              value: null,
              erpCode: null,
              paymentForm: null,
              createdAt: '2022-12-07T12:31:55.765847'
            }
          ]
        ]
      },
      error: {
        type: 'null',
        default: null,
        title: 'The error Schema',
        examples: [null]
      }
    },
    examples: [
      {
        status: 'success',
        message: 'Item list',
        data: [
          {
            ledgerAccount: null,
            status: 'active',
            value: {
              currency: 'BRL',
              amount: 21.3
            },
            paymentForm: null,
            updatedAt: '2022-12-07T12:39:55.497938',
            imageUrl:
              'https://cdn.awsli.com.br/600x700/846/846472/produto/39247659/acb5e43501.jpg',
            eanCode: null,
            manufacturer: null,
            createdAt: '2022-12-07T12:39:55.497938',
            erpCode: null,
            description: 'Caneta Homem de Ferro',
            complement: 'sequi et et',
            supplier: null,
            costObject: null,
            id: '2521d388-040a-4187-9897-4d381f62fbca',
            unity: 'UN',
            itemGroup: {
              label: 'Papelaria',
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
            },
            owner: {
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              master: 'b52aaba413aa104dc216cb6219212c07',
              establishment: 'API AUTOMATION',
              user: 'POSTMAN Christine17',
              username: null,
              group: 'API-TA ITEM'
            },
            itemType: 'product',
            finality: null,
            deletedAt: null
          },
          {
            status: 'active',
            updatedAt: '2022-12-07T16:48:15.049081',
            erpCode: null,
            supplier: null,
            manufacturer: null,
            itemType: 'product',
            deletedAt: null,
            owner: {
              group: 'API-TA ITEM',
              username: null,
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              establishment: 'API AUTOMATION',
              user: 'POSTMAN Eloy.Bahringer',
              master: 'b52aaba413aa104dc216cb6219212c07'
            },
            imageUrl: null,
            value: {
              amount: 20.5,
              currency: 'BRL'
            },
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            costObject: null,
            id: '505898f2-1ba9-491f-be2a-ebce6de59609',
            eanCode: null,
            ledgerAccount: null,
            paymentForm: null,
            finality: null,
            complement: 'quos eius ut',
            description: 'Caneta Batman',
            createdAt: '2022-12-07T16:48:15.049081',
            unity: 'UN'
          },
          {
            imageUrl: null,
            updatedAt: '2022-12-06T18:28:18.991750',
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            eanCode: null,
            value: null,
            itemType: 'product',
            complement: 'inventore qui ea',
            paymentForm: null,
            erpCode: null,
            status: 'active',
            description: 'Caneta Preta',
            finality: null,
            deletedAt: null,
            id: '6afb907c-7356-4116-848b-aa78e9c6cb80',
            unity: 'UN',
            supplier: null,
            costObject: null,
            manufacturer: null,
            ledgerAccount: null,
            owner: {
              group: 'API-TA ITEM',
              username: null,
              master: '24f44d6f06f812fe2b12d57111a47a95',
              user: 'POSTMAN Abdullah.Heathcote32',
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              establishment: 'API AUTOMATION'
            },
            createdAt: '2022-12-06T18:28:18.991750'
          },
          {
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            manufacturer: null,
            ledgerAccount: null,
            value: {
              amount: 15.9,
              currency: 'BRL'
            },
            costObject: null,
            supplier: null,
            deletedAt: null,
            updatedAt: '2022-12-07T12:36:23.705849',
            owner: {
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              establishment: 'API AUTOMATION',
              username: null,
              master: 'b52aaba413aa104dc216cb6219212c07',
              user: 'POSTMAN Samantha_Langosh34',
              group: 'API-TA ITEM'
            },
            status: 'active',
            erpCode: null,
            id: '6d4f114f-5225-4462-a14b-cc2f814e31e7',
            complement: 'delectus iure a',
            itemType: 'product',
            unity: 'UN',
            imageUrl:
              'https://a-static.mlcdn.com.br/800x560/caneta-para-tablet-trust-stylus-football-edit-brasil-18396/kmxsc/18396/13d426dd3b564354796ce3fe8f803db8.jpg',
            eanCode: null,
            createdAt: '2022-12-07T12:36:23.705849',
            finality: null,
            paymentForm: null,
            description: 'Caneta Brasil'
          },
          {
            erpCode: null,
            complement: 'sit saepe porro',
            status: 'active',
            description: 'Caneta Batman',
            deletedAt: null,
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            finality: null,
            paymentForm: null,
            itemType: 'product',
            ledgerAccount: null,
            value: {
              amount: 20.5,
              currency: 'BRL'
            },
            updatedAt: '2022-12-19T12:26:11.887994',
            eanCode: null,
            unity: 'UN',
            owner: {
              username: null,
              user: 'POSTMAN Deondre.Wintheiser17',
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              master: 'b52aaba413aa104dc216cb6219212c07',
              establishment: 'API AUTOMATION',
              group: 'API-TA ITEM'
            },
            costObject: null,
            imageUrl: null,
            id: '724c23e4-0f9f-459b-9467-9cfa3d1a9f2f',
            supplier: null,
            manufacturer: null,
            createdAt: '2022-12-19T12:26:11.887994'
          },
          {
            finality: null,
            costObject: null,
            eanCode: null,
            itemType: 'service',
            id: '8183e0eb-d41c-418d-88da-531695ad60d7',
            status: 'active',
            paymentForm: null,
            owner: {
              group: 'API-TA ITEM',
              user: 'POSTMAN Leopold.Becker',
              master: 'b52aaba413aa104dc216cb6219212c07',
              username: null,
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              establishment: 'API AUTOMATION'
            },
            value: {
              amount: 550.9,
              currency: 'BRL'
            },
            deletedAt: null,
            ledgerAccount: null,
            manufacturer: null,
            updatedAt: '2022-12-07T12:44:21.204384',
            erpCode: null,
            createdAt: '2022-12-07T12:44:21.204384',
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            description: 'Service Homem de Ferro 2',
            supplier: null,
            imageUrl:
              'https://http2.mlstatic.com/D_NQ_NP_2X_652002-MLB51493825794_092022-F.webp',
            unity: 'UN',
            complement: 'totam rerum culpa'
          },
          {
            erpCode: null,
            complement: 'in et soluta',
            deletedAt: null,
            itemType: 'product',
            costObject: null,
            description: 'Caneta Cacto',
            imageUrl:
              'https://cf.shopee.com.br/file/6e0445389e46b7a0a88b1162a87375a4',
            status: 'active',
            value: null,
            owner: {
              master: '24f44d6f06f812fe2b12d57111a47a95',
              user: 'POSTMAN Sanford_Wyman54',
              establishment: 'API AUTOMATION',
              group: 'API-TA ITEM',
              username: null,
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
            },
            supplier: null,
            eanCode: null,
            manufacturer: null,
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            finality: null,
            paymentForm: null,
            createdAt: '2022-12-07T12:16:06.312073',
            id: '9ef5a4dc-3aa5-42e8-b2a4-3d5f9d50c81f',
            unity: 'UN',
            ledgerAccount: null,
            updatedAt: '2022-12-07T12:16:06.312073'
          },
          {
            manufacturer: null,
            eanCode: null,
            erpCode: null,
            ledgerAccount: null,
            costObject: null,
            value: null,
            itemType: 'product',
            updatedAt: '2022-12-07T12:22:06.431987',
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            complement: 'quam dolorem eligendi',
            description: 'Caneta Cacto',
            paymentForm: null,
            createdAt: '2022-12-07T12:22:06.431987',
            supplier: null,
            id: 'c5c12403-2d9b-4dda-a819-d3722878093b',
            deletedAt: null,
            status: 'active',
            owner: {
              group: 'API-TA ITEM',
              master: 'b52aaba413aa104dc216cb6219212c07',
              username: null,
              establishment: 'API AUTOMATION',
              user: 'POSTMAN Randy_Altenwerth',
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A'
            },
            unity: 'UN',
            imageUrl:
              'https://cf.shopee.com.br/file/6e0445389e46b7a0a88b1162a87375a4',
            finality: null
          },
          {
            imageUrl:
              'https://www.google.com/url?sa=i\u0026url=https%3A%2F%2Fshopee.com.br%2FCaneta-Grifin%25C3%25B3ria-em-Ouro-Harry-Potter-i.299593138.9267779732\u0026psig=AOvVaw06aCGGX60b2WB41Kcujle0\u0026ust=1670502329741000\u0026source=images\u0026cd=vfe\u0026ved=0CBAQjRxqFwoTCNjvw6TA5_sCFQAAAAAdAAAAABAD',
            erpCode: null,
            deletedAt: null,
            eanCode: null,
            description: 'Caneta Varinha Harry Potter',
            status: 'active',
            complement: 'vel est eos',
            itemGroup: {
              label: 'Papelaria',
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
            },
            manufacturer: null,
            itemType: 'product',
            supplier: null,
            updatedAt: '2022-12-07T12:29:03.707429',
            value: null,
            finality: null,
            createdAt: '2022-12-07T12:29:03.707429',
            unity: 'UN',
            paymentForm: null,
            id: 'cfa7d189-263b-4556-9366-52c112c52e45',
            owner: {
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              group: 'API-TA ITEM',
              master: 'b52aaba413aa104dc216cb6219212c07',
              user: 'POSTMAN Kennith.Morissette',
              establishment: 'API AUTOMATION',
              username: null
            },
            costObject: null,
            ledgerAccount: null
          },
          {
            erpCode: null,
            createdAt: '2022-12-07T12:41:00.878480',
            itemType: 'service',
            paymentForm: null,
            owner: {
              user: 'POSTMAN Susanna.Lindgren',
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              master: 'b52aaba413aa104dc216cb6219212c07',
              group: 'API-TA ITEM',
              username: null,
              establishment: 'API AUTOMATION'
            },
            id: 'd3d56a6a-74af-4d37-a0dc-f2dc3c0384d8',
            value: {
              amount: 550.9,
              currency: 'BRL'
            },
            imageUrl:
              'https://www.google.com/aclk?sa=l\u0026ai=DChcSEwi08ammw-f7AhVFQUgAHWO5C8AYABAjGgJjZQ\u0026sig=AOD64_2JA8KpdWdkT8-exEeYLwvJVSaLlA\u0026adurl\u0026ctype=5\u0026ved=2ahUKEwjvxJ-mw-f7AhX-FbkGHUU6AA4Quxd6BQgBENIC',
            complement: 'eaque enim fugiat',
            finality: null,
            status: 'active',
            description: 'Service Homem de Ferro',
            manufacturer: null,
            ledgerAccount: null,
            supplier: null,
            costObject: null,
            eanCode: null,
            unity: 'UN',
            updatedAt: '2022-12-07T12:41:00.878480',
            itemGroup: {
              label: 'Papelaria',
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4'
            },
            deletedAt: null
          },
          {
            costObject: null,
            owner: {
              group: 'API-TA ITEM',
              user: 'POSTMAN Damian.McLaughlin12',
              company: 'ROIT INNOVATION DESENVOLVIMENTO S/A',
              username: null,
              establishment: 'API AUTOMATION',
              master: 'b52aaba413aa104dc216cb6219212c07'
            },
            updatedAt: '2022-12-07T12:31:55.765847',
            itemType: 'product',
            itemGroup: {
              id: '5d7c0b40-2cc7-498c-a835-45026361aff4',
              label: 'Papelaria'
            },
            supplier: null,
            complement: 'consectetur repellendus tempore',
            deletedAt: null,
            ledgerAccount: null,
            id: 'ee65a1f3-9196-457b-a7ec-2823193ef76a',
            unity: 'UN',
            finality: null,
            status: 'active',
            imageUrl:
              'https://cf.shopee.com.br/file/0f1ad6ce92c2c6124e538577b5b864e9',
            description: 'Caneta Varinha Harry Potter 2',
            eanCode: null,
            manufacturer: null,
            value: null,
            erpCode: null,
            paymentForm: null,
            createdAt: '2022-12-07T12:31:55.765847'
          }
        ],
        error: null
      }
    ]
  },
  patchItemSchema: {
    properties: {
      status: {
        type: 'string'
      },
      message: {
        type: 'string'
      },
      data: {
        type: 'object',
        properties: {
          status: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          itemType: {
            type: 'string'
          },
          complement: {
            type: 'string'
          },
          itemGroup: {
            type: 'object',
            properties: {
              id: {
                type: 'string'
              },
              label: {
                type: 'string'
              }
            },
            required: ['id', 'label']
          },
          unity: {
            type: 'string'
          },
          value: {
            type: 'object',
            properties: {
              amount: {
                type: 'number'
              },
              currency: {
                type: 'string'
              }
            },
            required: ['amount', 'currency']
          },
          imageUrl: {
            type: 'string'
          },
          updatedAt: {
            type: 'string'
          }
        },
        required: [
          'status',
          'description',
          'itemType',
          'complement',
          'itemGroup',
          'unity',
          'value',
          'imageUrl',
          'updatedAt'
        ]
      },
      error: {
        type: 'null'
      }
    },
    required: ['status', 'message', 'data', 'error']
  },
  putItemSchema: {
    $id: 'http://example.com/example.json',
    type: 'object',
    default: {},
    title: 'Root Schema',
    required: ['status', 'message', 'data', 'error'],
    properties: {
      status: {
        type: 'string',
        default: '',
        title: 'The status Schema',
        examples: ['success']
      },
      message: {
        type: 'string',
        default: '',
        title: 'The message Schema',
        examples: ['item updated']
      },
      data: {
        type: 'object',
        default: {},
        title: 'The data Schema',
        required: ['description', 'updatedAt'],
        properties: {
          description: {
            type: 'string',
            default: '',
            title: 'The description Schema',
            examples: ['teste empresa description']
          },
          updatedAt: {
            type: 'string',
            default: '',
            title: 'The updatedAt Schema',
            examples: ['2022-09-05T15:12:18.148414']
          }
        },
        examples: [
          {
            description: 'teste empresa description',
            updatedAt: '2022-09-05T15:12:18.148414'
          }
        ]
      },
      error: {
        type: 'null',
        default: null,
        title: 'The error Schema',
        examples: [null]
      }
    },
    examples: [
      {
        status: 'success',
        message: 'item updated',
        data: {
          description: 'teste empresa description',
          updatedAt: '2022-09-05T15:12:18.148414'
        },
        error: null
      }
    ]
  },
  deleteItemSchema: {
    properties: {
      status: {
        type: 'string'
      },
      message: {
        type: 'string'
      },
      data: {
        type: 'object',
        properties: {
          deletedAt: {
            type: 'string'
          },
          updatedAt: {
            type: 'string'
          }
        },
        required: ['deletedAt', 'updatedAt']
      },
      error: {
        type: 'null'
      }
    },
    required: ['status', 'message', 'data', 'error']
  }
}
