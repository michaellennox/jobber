"""empty message

Revision ID: d314a5596035
Revises: aca3c4b65e26
Create Date: 2016-02-18 15:19:48.679773

"""

# revision identifiers, used by Alembic.
revision = 'd314a5596035'
down_revision = 'aca3c4b65e26'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.add_column('company', sa.Column('address', sa.String(length=80), nullable=True))
    op.add_column('company', sa.Column('industry', sa.String(length=80), nullable=True))
    op.add_column('company', sa.Column('size', sa.String(length=50), nullable=True))
    op.add_column('company', sa.Column('summary', sa.String(length=400), nullable=True))
    op.add_column('company', sa.Column('website', sa.String(length=80), nullable=True))
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('company', 'website')
    op.drop_column('company', 'summary')
    op.drop_column('company', 'size')
    op.drop_column('company', 'industry')
    op.drop_column('company', 'address')
    ### end Alembic commands ###