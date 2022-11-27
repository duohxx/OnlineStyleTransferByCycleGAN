#!/usr/bin/python3

import argparse
import sys
import os

import torchvision.transforms as transforms
from torchvision.utils import save_image
from torch.utils.data import DataLoader
from torch.autograd import Variable
import torch

from models import Generator
from datasets import ImageDataset
from PIL import Image
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--img_path', default = "vg/1.jpg", help='please input a image')
    parser.add_argument('--name', default = "gen.jpg", help='please input the output img name')
    parser.add_argument('--style', default = "vangogh", help='please enter the transfer style')
    opt = parser.parse_args()
    print(opt)
    batchSize = 1
    input_nc, output_nc = 3, 3
    size = 300
    cuda = 1
    n_cpu = 8

    if opt.style == 'kiwi':
        generator_A2B = 'vg/models/kiwi/netG_A2B.pth'
    elif opt.style == 'abstract':
        generator_A2B = 'vg/models/abstract/netG_A2B.pth'
    else :
        generator_A2B = 'vg/models/vangogh/netG_A2B.pth'

    ###### Definition of variables ######
    # Networks
    netG_A2B = Generator(input_nc, output_nc)

    if cuda:
        netG_A2B.to(device)

    # Load state dicts
    netG_A2B.load_state_dict(torch.load(generator_A2B, map_location='cpu'))

    # Set model's test mode
    netG_A2B.eval()

    # Inputs & targets memory allocation
    Tensor = torch.Tensor
    input_A = Tensor(batchSize, input_nc, size, size)

    transforms_ = [#transforms.Resize(int(opt.size * 1.12), Image.BICUBIC),
                   transforms.RandomCrop(size),
      #             transforms.RandomHorizontalFlip(),
                   transforms.ToTensor(),
                   transforms.Normalize((0.5, 0.5, 0.5), (0.5, 0.5, 0.5))]
    ###### Testing######

    # Create output dirs if they don't exist
    if not os.path.exists('output'):
        os.makedirs('output')


    real_A = Image.open(opt.img_path)
    real_A = real_A.resize((300, 300))
    real_A = transforms.ToTensor()(real_A).unsqueeze(0)
    real_A = Variable(input_A.copy_(real_A))

    fake_B = 0.5*(netG_A2B(real_A).data + 1.0)


    # Save image files
    save_image(fake_B, 'output/'  + opt.name)

    sys.stdout.write('\rGenerated finished\n')
