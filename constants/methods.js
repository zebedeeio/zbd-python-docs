export const methods = [
  {
    name: 'create_charge',
    entity: 'Charge',
    description:
      'Creates a new Charge / Payment Request in the Bitcoin Lightning Network, payable by any Bitcoin Lightning wallet.',
    params: [
      {
        name: 'amount_msats',
        extra: 'required',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        extra: 'required',
        description: 'Note or comment for this Charge (visible to payer).',
      },
      {
        name: 'amount_of_seconds_to_expire_after',
        description: 'Time until charge expiration -> in seconds.',
      },
      {
        name: 'internal_id',
        description: 'Open metadata string property.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/charges/create',
      },
    ],
  },
  {
    name: 'get_charge',
    entity: 'Charge',
    description:
      'Retrieves all information relating to a specific Charge / Payment Request.',
    params: [
      {
        name: 'charge_id: String',
        extra: 'required',
        description: 'A String representing the ID of the Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/charges/get',
      },
    ],
  },
  {
    name: 'create_static_charge',
    entity: 'Static Charge',
    description:
      'Creates a new Static Charge / LNURL Pay in the Bitcoin Lightning Network, payable by any Bitcoin Lightning wallet.',
    params: [
      {
        name: 'min_amount_msats',
        extra: 'required',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'max_amount_msats',
        extra: 'required',
        description: 'Note or comment for this Charge (visible to payer).',
      },
      {
        name: 'description',
        extra: 'required',
        description:
          'Note or comment for this Static Charge (visible to payer).',
      },
      {
        name: 'internal_id',
        description: 'Open metadata string property.',
      },
      {
        name: 'success_message',
        description:
          'The message shown to the user after they make a successful payment.',
      },
      {
        name: 'allowed_slots',
        description:
          'Set the maximum number of payments. Use None for unlimited payments.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/static-charges/create',
      },
    ],
  },
  {
    name: 'get_static_charge',
    entity: 'Static Charge',
    description:
      'Retrieves all information relating to a specific Static Charge / LNURL Pay.',
    params: [
      {
        name: 'static_charge_id: String',
        extra: 'required',
        description: 'A String representing the ID of the Static Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/static-charges/get',
      },
    ],
  },
  {
    name: 'update_static_charge',
    entity: 'Static Charge',
    description:
      'Perform updates to any of the allowed properties of a Static Charge.',
    params: [
      {
        name: 'min_amount_msats',
        extra: 'optional',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'max_amount_msats',
        extra: 'optional',
        description: 'Note or comment for this Charge (visible to payer).',
      },
      {
        name: 'description',
        extra: 'optional',
        description:
          'Note or comment for this Static Charge (visible to payer).',
      },
      {
        name: 'internal_id',
        extra: 'optional',
        description: 'Open metadata string property.',
      },
      {
        name: 'success_message',
        extra: 'optional',
        description:
          'The message shown to the user after they make a successful payment.',
      },
      {
        name: 'allowed_slots',
        extra: 'optional',
        description:
          'Set the maximum number of payments. Use None for unlimited payments.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/static-charges/create',
      },
    ],
  },
  {
    name: 'create_withdrawal_request',
    entity: 'Withdrawal Request',
    description:
      'A Withdrawal Request is a QR code that allows someone to scan and receive Bitcoin (e.g. Withdrawals).',
    params: [
      {
        name: 'amount_msats',
        extra: 'required',
        description:
          'The amount for the Withdrawal Request -> in millisatoshis.',
      },
      {
        name: 'amount_of_seconds_to_expire_after',
        description: 'Time until Withdrawal Request expires -> in seconds.',
      },
      {
        name: 'description',
        description:
          'Note or comment for this Withdrawal Request (visible to payer).',
      },
      {
        name: 'internal_id',
        description: 'Open metadata string property.',
      },
      {
        name: 'callback_url',
        extra: 'required',
        description:
          'The endpoint ZBD will POST Withdrawal Request updates to.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/withdrawal-requests/create',
      },
    ],
  },
  {
    name: 'get_withdrawal_request',
    entity: 'Withdrawal Request',
    description: 'Retrieves details about a specific Withdrawal Request.',
    params: [
      {
        name: 'String: withdrawal_request_id',
        extra: 'required',
        description: 'A String representing the ID of the Withdrawal Request.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/withdrawal-requests/get',
      },
    ],
  },
  {
    name: 'send_payment_to_lightning_address',
    entity: 'Lightning Address',
    description:
      'Send Bitcoin payments directly to a Lightning Address. A Lightning Address is an internet identifier (akin to an email address -- andre@zbd.gg) that anyone can send Bitcoin Lightning Network payments to.',
    params: [
      {
        name: 'lightning_address',
        extra: 'required',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'amount_msats',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'comment',
        description: 'Note or description of this Payment.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/send-payment',
      },
    ],
  },
  {
    name: 'validate_lightning_address',
    entity: 'Lightning Address',
    description:
      "Not all internet identifiers are Lightning Addresses / compatible with the Lightning Address protocol. Use this endpoint in order to validate whether a user's entered Lightning Address is valid.",
    params: [
      {
        name: 'lightning_address: &LnAddress',
        extra: 'required',
        description:
          'The LnAddress reference containing the address to be validated.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/validate',
      },
    ],
  },
  {
    name: 'fetch_charge_from_lightning_address',
    entity: 'Lightning Address',
    description:
      "Generates a Bitcoin Lightning Charge / Payment Request for a given Lightning Address destination. Depending on your system's configuration or your product's UX, you may need the ability to generate Charges for specific users using a different provider than ZBD.",
    params: [
      {
        name: 'lightning_address',
        extra: 'required',
        description: 'The Lightning Address of the intended recipient.',
      },
      {
        name: 'amount_msats',
        extra: 'required',
        description: 'The amount for the Charge -> in millisatoshis.',
      },
      {
        name: 'description',
        description: 'Note or comment of this Charge.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/lightning-address/create-charge',
      },
    ],
  },
  {
    name: 'get_wallet_details',
    entity: 'Wallet',
    description: 'Retrieves the total balance of a given Project Wallet.',
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/wallet/get',
      },
    ],
  },
  {
    name: 'transfer_zbd_funds',
    entity: 'Wallet',
    description:
      'Initiates a transfer of funds between two Project Wallets you own.',
    params: [
      {
        name: 'amount_msats',
        extra: 'required',
        description: 'The amount to be transferred -> in millisatoshis.',
      },
      {
        name: 'receiver_wallet_id',
        extra: 'required',
        description: 'The Wallet ID of the recipient Project.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/internal-transfer/create',
      },
    ],
  },
  {
    name: 'send_keysend_payment',
    entity: 'Keysend',
    description:
      'This endpoint exposes the ability to make payment directly to a Lightning Network node Public Key, without the need for a Payment Request / Charge.',
    params: [
      {
        name: 'amount_msats',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'public_key',
        extra: 'required',
        description: 'The Public Key for the destination Lightning Node.',
      },
      {
        name: 'metadata',
        description: 'TLV key value pairs / data records.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/keysend/send-payment',
      },
    ],
  },
  {
    name: 'pay_invoice',
    entity: 'Payment',
    description:
      'Pays a Charge / Payment Request in the Bitcoin Lightning Network.',
    params: [
      {
        name: 'invoice',
        extra: 'required',
        description: 'Lightning Network Payment Request/Charge.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Payment.',
      },
      {
        name: 'internal_id',
        description: 'Open metadata string property.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/payments/send',
      },
    ],
  },
  {
    name: 'get_payment_details',
    entity: 'Payment',
    description: 'Retrieves all the information related to a specific Payment.',
    params: [
      {
        name: 'zbd_id: String',
        extra: 'required',
        description: 'A String representing the ID of the Payment.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/payments/get',
      },
    ],
  },
  {
    name: 'send_payment_to_gamertag',
    entity: 'ZBD Gamertag',
    description:
      "This API endpoint is used to send Bitcoin payments directly to a user's ZBD Gamertag.",
    params: [
      {
        name: 'amount_msats',
        extra: 'required',
        description: 'The amount for the Payment -> in millisatoshis.',
      },
      {
        name: 'gamertag',
        extra: 'required',
        description: 'Desination ZBD gamertag.',
      },
      {
        name: 'description',
        description: 'Note or comment for this Payment (visible to recipient).',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/send-payment',
      },
    ],
  },
  {
    name: 'get_gamertag_transaction_details',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD Gamertag when provided with a ZBD User's ID.",
    params: [
      {
        name: 'transaction_id: String',
        extra: 'required',
        description:
          'A String representing the ZBD Gamertag Payment Transaction ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-payment',
      },
    ],
  },
  {
    name: 'get_user_id_from_gamertag',
    entity: 'ZBD Gamertag',
    description: "Get a given ZBD User's ID when provided with a ZBD Gamertag.",
    params: [
      {
        name: 'gamertag: String',
        extra: 'required',
        description: 'A String representing the ZBD Gamertag of the ZBD user.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-userid',
      },
    ],
  },
  {
    name: 'get_gamertag_from_user_id',
    entity: 'ZBD Gamertag',
    description:
      "Invoked when the app first loads. If a plugin reloads, it's invoked again with the existing app.",
    params: [
      {
        name: 'user_id: String',
        extra: 'required',
        description: 'A String representing the specified ZBD User ID.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/gamertag/get-gamertag',
      },
    ],
  },
  {
    name: 'is_supported_region',
    entity: 'Utility',
    description:
      'If you wish to know whether the incoming user request is coming from a region/country where ZBD is supported or not, you can use this simple API endpoint and pass the target IP address as a parameter.',
    params: [
      {
        name: 'ip: String',
        extra: 'required',
        description: 'A String representing the IP Address being checked.',
      },
    ],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/is-supported',
      },
    ],
  },
  {
    name: 'get_zbd_prod_server_ip',
    entity: 'Utility',
    description:
      "The ZBD API relies on callback URLs for keeping you informed about updates that occur to any Charges, Payments, or Withdrawals you've created. In order to ensure that any incoming callback message is indeed from a trusted ZBD API infrastructure server, we provide this API endpoint for you to know which IP addresses real requests come from.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/prod-ips',
      },
    ],
  },
  {
    name: 'btc_usd_price',
    entity: 'Utility',
    description:
      "Get the latest price for Bitcoin in US Dollars. The exchange rate feed is refreshed every 5 seconds and is based upon a combination of industry-leading partner exchange providers's price feeds.",
    params: [],
    examples: [
      {
        name: 'View response payload examples',
        url: 'https://docs.zebedee.io/api/utils/btc-usd',
      },
    ],
  },
  {
    name: 'convert_msats_to_sats',
    entity: 'Utility',
    description: 'Get the sats value from msats.',
    params: [
      {
        name: 'amount_msats: String',
        extra: 'required',
        description: 'A String representing the sats amount being converted.',
      },
    ],
    examples: [],
  },
  {
    name: 'convert_sats_to_msats',
    entity: 'Utility',
    description: 'Get the msats value from sats.',
    params: [
      {
        name: 'amount_sats: String',
        extra: 'required',
        description: 'A String representing the sats amount being converted.',
      },
    ],
    examples: [],
  },
]
