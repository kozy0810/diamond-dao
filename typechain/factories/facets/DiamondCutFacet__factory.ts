/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DiamondCutFacet,
  DiamondCutFacetInterface,
} from "../../facets/DiamondCutFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_initializationContractAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "InitializationFunctionReverted",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        indexed: false,
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "DiamondCut",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        internalType: "address",
        name: "_init",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_calldata",
        type: "bytes",
      },
    ],
    name: "diamondCut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611a44806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80631f931c1c14610030575b600080fd5b61004361003e366004611368565b610045565b005b61004d61009e565b61009761005a85876114e5565b8484848080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061015492505050565b5050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff1633146101525760405162461bcd60e51b815260206004820152602260248201527f4c69624469616d6f6e643a204d75737420626520636f6e7472616374206f776e60448201527f657200000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b565b60005b835181101561033057600084828151811061017457610174611641565b60200260200101516020015190506000600281111561019557610195611670565b8160028111156101a7576101a7611670565b036101f5576101f08583815181106101c1576101c1611641565b6020026020010151600001518684815181106101df576101df611641565b60200260200101516040015161037b565b61031d565b600181600281111561020957610209611670565b03610252576101f085838151811061022357610223611641565b60200260200101516000015186848151811061024157610241611641565b6020026020010151604001516106dc565b600281600281111561026657610266611670565b036102af576101f085838151811061028057610280611641565b60200260200101516000015186848151811061029e5761029e611641565b602002602001015160400151610a4d565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f7272656374204661636574437560448201527f74416374696f6e000000000000000000000000000000000000000000000000006064820152608401610149565b5080610328816116ce565b915050610157565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738383836040516103649392919061177c565b60405180910390a16103768282610c0c565b505050565b60008151116103f25760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201527f6163657420746f206375740000000000000000000000000000000000000000006064820152608401610149565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff831661049c5760405162461bcd60e51b815260206004820152602c60248201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260448201527f65206164647265737328302900000000000000000000000000000000000000006064820152608401610149565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff821690036104e4576104e48285610d05565b60005b835181101561009757600084828151811061050457610504611641565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff1680156105cf5760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c72656164792065786973747300000000000000000000006064820152608401610149565b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff000000000000000000000000000000000000000016179055836106c4816118e4565b945050505080806106d4906116ce565b9150506104e7565b60008151116107535760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201527f6163657420746f206375740000000000000000000000000000000000000000006064820152608401610149565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff83166107fd5760405162461bcd60e51b815260206004820152602c60248201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260448201527f65206164647265737328302900000000000000000000000000000000000000006064820152608401610149565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600182016020526040812054906bffffffffffffffffffffffff82169003610845576108458285610d05565b60005b835181101561009757600084828151811061086557610865611641565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529186905260409091205490915073ffffffffffffffffffffffffffffffffffffffff90811690871681036109355760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401610149565b610940858284610d94565b7fffffffff000000000000000000000000000000000000000000000000000000008216600081815260208781526040808320805473ffffffffffffffffffffffffffffffffffffffff908116740100000000000000000000000000000000000000006bffffffffffffffffffffffff8c16021782558c168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281547fffffffffffffffffffffffff00000000000000000000000000000000000000001617905583610a35816118e4565b94505050508080610a45906116ce565b915050610848565b6000815111610ac45760405162461bcd60e51b815260206004820152602b60248201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660448201527f6163657420746f206375740000000000000000000000000000000000000000006064820152608401610149565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c73ffffffffffffffffffffffffffffffffffffffff831615610b6f5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d7573742062652061646472657373283029000000000000000000006064820152608401610149565b60005b8251811015610c06576000838281518110610b8f57610b8f611641565b6020908102919091018101517fffffffff00000000000000000000000000000000000000000000000000000000811660009081529185905260409091205490915073ffffffffffffffffffffffffffffffffffffffff16610bf1848284610d94565b50508080610bfe906116ce565b915050610b72565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c2b575050565b610c4d826040518060600160405280602881526020016119c3602891396112d5565b6000808373ffffffffffffffffffffffffffffffffffffffff1683604051610c75919061190f565b600060405180830381855af49150503d8060008114610cb0576040519150601f19603f3d011682016040523d82523d6000602084013e610cb5565b606091505b509150915081610c0657805115610ccf5780518082602001fd5b83836040517f192105d700000000000000000000000000000000000000000000000000000000815260040161014992919061192b565b610d27816040518060600160405280602481526020016119eb602491396112d5565b60028201805473ffffffffffffffffffffffffffffffffffffffff90921660008181526001948501602090815260408220860185905594840183559182529290200180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169091179055565b73ffffffffffffffffffffffffffffffffffffffff8216610e1d5760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401610149565b3073ffffffffffffffffffffffffffffffffffffffff831603610ea85760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201527f7461626c652066756e6374696f6e0000000000000000000000000000000000006064820152608401610149565b7fffffffff0000000000000000000000000000000000000000000000000000000081166000908152602084815260408083205473ffffffffffffffffffffffffffffffffffffffff86168452600180880190935290832054740100000000000000000000000000000000000000009091046bffffffffffffffffffffffff169291610f3291611962565b90508082146110795773ffffffffffffffffffffffffffffffffffffffff841660009081526001860160205260408120805483908110610f7457610f74611641565b6000918252602080832060088304015473ffffffffffffffffffffffffffffffffffffffff8916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610fd257610fd2611641565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790557fffffffff0000000000000000000000000000000000000000000000000000000092909216825286905260409020805473ffffffffffffffffffffffffffffffffffffffff16740100000000000000000000000000000000000000006bffffffffffffffffffffffff8516021790555b73ffffffffffffffffffffffffffffffffffffffff8416600090815260018601602052604090208054806110af576110af611979565b6000828152602080822060087fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90940193840401805463ffffffff600460078716026101000a0219169055919092557fffffffff00000000000000000000000000000000000000000000000000000000851682528690526040812081905581900361009757600285015460009061114890600190611962565b73ffffffffffffffffffffffffffffffffffffffff8616600090815260018089016020526040909120015490915080821461123657600087600201838154811061119457611194611641565b60009182526020909120015460028901805473ffffffffffffffffffffffffffffffffffffffff90921692508291849081106111d2576111d2611641565b600091825260208083209190910180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff948516179055929091168152600189810190925260409020018190555b8660020180548061124957611249611979565b6000828152602080822083017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90810180547fffffffffffffffffffffffff000000000000000000000000000000000000000016905590920190925573ffffffffffffffffffffffffffffffffffffffff88168252600189810190915260408220015550505050505050565b813b8181610c065760405162461bcd60e51b815260040161014991906119a8565b803573ffffffffffffffffffffffffffffffffffffffff8116811461131a57600080fd5b919050565b60008083601f84011261133157600080fd5b50813567ffffffffffffffff81111561134957600080fd5b60208301915083602082850101111561136157600080fd5b9250929050565b60008060008060006060868803121561138057600080fd5b853567ffffffffffffffff8082111561139857600080fd5b818801915088601f8301126113ac57600080fd5b8135818111156113bb57600080fd5b8960208260051b85010111156113d057600080fd5b602083019750809650506113e6602089016112f6565b945060408801359150808211156113fc57600080fd5b506114098882890161131f565b969995985093965092949392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561146c5761146c61141a565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156114b9576114b961141a565b604052919050565b600067ffffffffffffffff8211156114db576114db61141a565b5060051b60200190565b60006114f86114f3846114c1565b611472565b83815260208082019190600586811b86013681111561151657600080fd5b865b8181101561163457803567ffffffffffffffff808211156115395760008081fd5b818a0191506060823603121561154f5760008081fd5b611557611449565b611560836112f6565b815286830135600381106115745760008081fd5b818801526040838101358381111561158c5760008081fd5b939093019236601f8501126115a357600092508283fd5b833592506115b36114f3846114c1565b83815292871b840188019288810190368511156115d05760008081fd5b948901945b8486101561161d5785357fffffffff000000000000000000000000000000000000000000000000000000008116811461160e5760008081fd5b825294890194908901906115d5565b918301919091525088525050948301948301611518565b5092979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036116ff576116ff61169f565b5060010190565b60005b83811015611721578181015183820152602001611709565b83811115610c065750506000910152565b6000815180845261174a816020860160208601611706565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b848110156118a7577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff808a8503018652815188850173ffffffffffffffffffffffffffffffffffffffff8251168652848201516003811061182e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b808310156118925783517fffffffff00000000000000000000000000000000000000000000000000000000168252928601926001929092019190860190611850565b509785019795505050908201906001016117a5565b505073ffffffffffffffffffffffffffffffffffffffff8a169088015286810360408801526118d68189611732565b9a9950505050505050505050565b60006bffffffffffffffffffffffff8083168181036119055761190561169f565b6001019392505050565b60008251611921818460208701611706565b9190910192915050565b73ffffffffffffffffffffffffffffffffffffffff8316815260406020820152600061195a6040830184611732565b949350505050565b6000828210156119745761197461169f565b500390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b6020815260006119bb6020830184611732565b939250505056fe4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a26469706673582212202bcbf19801fd8d3fc48d8557d89f4c511492402c9913483df66c362fb685e9c064736f6c634300080d0033";

type DiamondCutFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondCutFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondCutFacet__factory extends ContractFactory {
  constructor(...args: DiamondCutFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DiamondCutFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondCutFacet>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DiamondCutFacet {
    return super.attach(address) as DiamondCutFacet;
  }
  override connect(signer: Signer): DiamondCutFacet__factory {
    return super.connect(signer) as DiamondCutFacet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondCutFacetInterface {
    return new utils.Interface(_abi) as DiamondCutFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondCutFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondCutFacet;
  }
}
