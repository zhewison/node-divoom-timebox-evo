import { expect } from 'chai';
import 'mocha';
import { TimeboxEvoMessage } from '../src/messages/message';
import { TimeboxEvoRequest } from '../src';

describe('TimeboxEvoRequest class', () => {
  function strip(msg: string | undefined) {
    return msg === undefined ? undefined : msg.slice(6, -6);
  }
  describe('Properties', () => {
    const d = new TimeboxEvoRequest;
    d.push("4500010001000100ff00ff")

    it('should set the proper length', () => {
      expect(d.messages[0].lengthHS).to.equal("0d00");
    })

    it('should set the proper crc', () => {
      expect(d.messages[0].crcHS).to.equal('5302');
    });

    it('should set the proper payload', () => {
      expect(d.messages[0].payload).to.equal('4500010001000100ff00ff');
    })

    it('should set the proper message', () => {
      const shouldBe = ["010d004500010001000100ff00ff530202"];
      const is = d.messages;

      expect(is.length).to.equal(shouldBe.length);
      is.forEach((slice: TimeboxEvoMessage, index: number) => {
        expect(slice.message).to.equal(shouldBe[index])
      });
    })

    it('should split the message every 1332 characters or 666 buffer length', () => {
      const d2 = new TimeboxEvoRequest;
      d2.push("44000A0A04AA0000000000fd726f5f7674687c7a6e7b7b6d8281728a8a7b8b8c8087897e83847b74756e53534f6e6e6662615a82837f9d9d9a8c8c8674716278766b7d7b6f7c7c7067685e3345432e414061746b576660777869b6b7a5c5c4b2c2c0b2898a869b9c978a8a857470615b4d3e5d49398080736a6b614a6261324e4f80928a6e8079949586d5d6c2e2e2d1b7b6a991918e999b96888983716c5f4c392b4227178181747272694057562745467e9e936c7e75959685d1d2bee6e3cfacab9e959694969893858580676255564638442f21817f74828379545f5b44504d68766f5b635f6f6d619d9c8bd5d2bfa8a5999495908685825b564a5d5042483223807c708f908685857a49494791928d4645444849497c7e797b7b7793949182817c8785824d493d5d574a422f237b72676d6f64434a2d2323245d5d5c62615f393939666461636565a2a29d9492901c1c1c696663332e25625e543f342e4a4036312f2a2121221415170f10131213161a1c1f2122261d1e213b3b3e4747490d0d0f7571710808084c493f3e332d77675a908a8057514b6e686446434327292e35394130343b313439393c4034373b222527938c8c0c0c0b2b261f373431776659948f87464341afadaeaaa4a2a79d988d8583706c6d4c4d5444475041444b545354938b8b42260f4b2d12432d1d7b716a9f9e9b4a4542b6b5b7b2aeaeaca5a2aba39fa8a19a726c6d8f8b8d8782837d7575a7a1a66d4d2f6e461e73481f80573195816f49403bb4adacc4c3c9c8c4c9cac7cbd2ced49e9391a7a6ae767379938b8e928b919985758a5c2a895a2a9263309c703f49311d7556399b7c66c4babadddce6ebe9f3a39797aaa8b06f696c898080646269936e4793632d9767319f6f37ad7d435c4126815d39a17345a17448ba9b81dad0cfa69c9ca8a4ad7068678a81827d7781704d2b5d3d1d24211e24252355432e8d673bb08355ac8055a97a4ab38556b88f658c6c56968a8b5d5658827c817383a0343334151b1d141a2014191f665649c3a38abe9a7db8906cc19461c6996793714f645854302c2d75747d5d5b64000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c3d4d4e4f5051525354551e565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f0f1f2f3f4f5f6f7f8f9fafbfc")
      const shouldBe = [
        "01050444000a0a04aa0000000000fd726f5f7674687c7a6e7b7b6d8281728a8a7b8b8c8087897e83847b74756e53534f6e6e6662615a82837f9d9d9a8c8c8674716278766b7d7b6f7c7c7067685e3345432e414061746b576660777869b6b7a5c5c4b2c2c0b2898a869b9c978a8a857470615b4d3e5d49398080736a6b614a6261324e4f80928a6e8079949586d5d6c2e2e2d1b7b6a991918e999b96888983716c5f4c392b4227178181747272694057562745467e9e936c7e75959685d1d2bee6e3cfacab9e959694969893858580676255564638442f21817f74828379545f5b44504d68766f5b635f6f6d619d9c8bd5d2bfa8a5999495908685825b564a5d5042483223807c708f908685857a49494791928d4645444849497c7e797b7b7793949182817c8785824d493d5d574a422f237b72676d6f64434a2d2323245d5d5c62615f393939666461636565a2a29d9492901c1c1c696663332e25625e543f342e4a4036312f2a2121221415170f10131213161a1c1f2122261d1e213b3b3e4747490d0d0f7571710808084c493f3e332d77675a908a8057514b6e686446434327292e35394130343b313439393c4034373b222527938c8c0c0c0b2b261f373431776659948f87464341afadaeaaa4a2a79d988d8583706c6d4c4d5444475041444b545354938b8b42260f4b2d12432d1d7b716a9f9e9b4a4542b6b5b7b2aeaeaca5a2aba39fa8a19a726c6d8f8b8d8782837d7575a7a1a66d4d2f6e461e73481f80573195816f49403bb4adacc4c3c9c8c4c9cac7cbd2ced49e9391a7a6ae767379938b8e928b919985758a5c2a895a2a9263309c703f49311d7556399b7c66c4babadddce6ebe9f3a39797aaa8b06f696c898080646269936e4793632d9767319f6f37ad7d435c4126815d39a17345a17448ba9b81dad0cfa69c9ca8a4ad7068678a81827d7781704d2b5d3d1d24211e24252355432e8d673bb08355ac8055a97a4ab38556b88f658c6c56968a8b5d5658827c817383a0343334151b1d141a2014191f665649c3a38abe9a7db8906cc19461c6996793714f645854302c2d75747d5d5b64000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c3d4d4e4f5051525354551e565758595a5b5c5d5e5f606162636465666768696a6b6c6d6e6f707172737475767778797a7b7c7d7e7f808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9fa0a1a2a3a4a5a6a7a8a9aaabacadaeafb0b1b2b3b4b5b6b7b8b9babbbcbdbebfc0c1c2c3c4c5c6c7c8c9cacbcccdcecfd0d1d2d3d4d5d6d7d8d9dadbdcdddedfe0e1e2e3e4e5e6e7e8e9eaebecedeeeff0f0f1f2f3f4f5f6f7f8f9fafbfc5ec302",
      ];
      const is = d2.messages;

      expect(is.length).to.equal(shouldBe.length);
      expect(is.asBinaryBuffer().length).to.be.equal(2);
      is.forEach((msg: TimeboxEvoMessage, index: number) => {
        expect(msg.asBinaryBuffer()[0].length).to.be.lessThan(667);
        expect(msg.message).to.equal(shouldBe[index])
      });
    })
  })
})